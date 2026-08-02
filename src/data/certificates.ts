import { BadgeCheck, ShieldCheck, FileCheck, Award, type LucideIcon } from "lucide-react";
import demoPdf from "@/assets/certificates_pdf/demo.pdf";

export type CertificateStatus = "Verified" | "In Process" | "Active";

export interface CertificateData {
  id: string;
  title: string;
  description: string;
  status: CertificateStatus;
  pdf: string;
  icon: LucideIcon;
}

export const CERTIFICATES: CertificateData[] = [
  {
    id: "gst",
    title: "GST Registered",
    description: "GST Registration Certificate",
    status: "Verified",
    pdf: demoPdf,
    icon: BadgeCheck,
  },
  {
    id: "msme",
    title: "MSME Registered",
    description: "MSME Registration Certificate",
    status: "Verified",
    pdf: demoPdf,
    icon: ShieldCheck,
  },
  {
    id: "udyam",
    title: "Udyam Registered",
    description: "Udyam Registration Certificate",
    status: "Verified",
    pdf: demoPdf,
    icon: FileCheck,
  },
  {
    id: "iso",
    title: "ISO 9001:2015",
    description: "Certification in progress",
    status: "In Process",
    pdf: demoPdf,
    icon: Award,
  },
];
