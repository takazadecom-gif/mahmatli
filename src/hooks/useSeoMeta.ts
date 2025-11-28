import { useEffect } from 'react';

interface SeoMetaProps {
  title: string;
  description: string;
}

export const useSeoMeta = ({ title, description }: SeoMetaProps) => {
  useEffect(() => {
    document.title = `${title} | Mahmatlı Köyü`;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description);
    }
  }, [title, description]);
};
