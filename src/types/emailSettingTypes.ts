export interface EmailConfigFormData {
  mailEngine: string;
  mailHost: string;
  mailPort: number;
  mailEncryption: string;
  mailUsername: string;
  mailPassword: string;
  fromMail: string;
  fromName: string;
  useSmtp: boolean;
}

export interface EmailTemplateModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export type EmailTemplate = {
  id: number;
  name: string;
  emailType: string;
  logo: string;
  emailSubject: string;
  lastUpdated: string;
  status: "Active" | "Inactive" | "Draft";
};

export interface Subscriber {
  id: number;
  name: string;
  email: string;
  birthday: string;
}
