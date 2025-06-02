import React, { useState, useEffect } from "react";

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => {
  const [emailContent, setEmailContent] = useState<React.ReactNode | null>(
    null
  );

  useEffect(() => {
    const fetchContent = async () => {
      // Simulate async content fetching
      const content = <h1>Welcome, {firstName}!</h1>;
      setEmailContent(content);
    };

    fetchContent();
  }, [firstName]);

  return <div>{emailContent}</div>;
};
