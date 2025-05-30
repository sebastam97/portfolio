import { useCallback } from 'react';

const useDownloadPDF = () => {
  const downloadPDF = useCallback(() => {
    const link = document.createElement('a');
    link.href = '/Sebastian_Tamayo_Villalba_-_Software_Developer-2025.pdf';
    link.download = 'Sebastian_Tamayo_Villalba_-_Software_Developer-2025.pdf';
    link.click();
  }, []);

  return { downloadPDF };
};

export default useDownloadPDF;
