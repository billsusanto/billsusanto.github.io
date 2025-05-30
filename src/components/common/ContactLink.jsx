import { Button } from "@/components/ui/button";

const ContactLink = ({ icon: Icon, label, href, variant = "outline" }) => {
  return (
    <Button
      variant={variant}
      className="gap-2 w-full sm:w-auto justify-start"
      onClick={() => window.open(href, "_blank")}
    >
      <Icon className="h-4 w-4" />
      <span>{label}</span>
    </Button>
  );
};

export default ContactLink;
