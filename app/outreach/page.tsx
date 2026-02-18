import { Metadata } from "next";
import { OutreachForm } from "../../components/outreach-form";

export const metadata: Metadata = {
    title: "Outreach Tool",
    description: "Internal outreach tool for creator outreach",
    robots: { index: false, follow: false },
};

export default function OutreachPage() {
    return <OutreachForm />;
}
