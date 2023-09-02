import { GetObjectCommand, S3 } from '@aws-sdk/client-s3';
import AWS from 'aws-sdk';
import { useEffect, useState } from 'react';

const useS3 = (path) => {
  const [image, setImage] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const s3Client = new S3.s3Client({
      region: "us-east-2"
    });

    try {
      setImage(s3Client.send(new GetObjectCommand({
        Bucket: 'picture-site-photos',
        Key: path
      })));
      setIsPending(false);
    } catch {
      setError('An error occurred');
      setIsPending(false);
    }
  });

  return { image, isPending, error };
}

export default useS3;