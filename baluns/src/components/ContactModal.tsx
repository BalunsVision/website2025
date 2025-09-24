import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface ContactModalProps {
  open: boolean;
  clickType: string;
  onClose: () => void;
}

export default function ContactModal({
  open,
  onClose,
  clickType,
}: ContactModalProps) {
  const [form, setForm] = useState({
    address: "",
    location: "",
    mapsLink: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const formData = new FormData();
      formData.append("address", form.address);
      formData.append("location", form.location);
      formData.append("mapsLink", form.mapsLink);
      formData.append("clickType", clickType); // send the slide title

      const res = await fetch("https://balunstech.com/send_email.php", {
        method: "POST",
        body: formData,
      });

      const text = await res.text();

      if (res.ok) {
        setResponse("✅ Mail sent successfully!");
        setForm({ address: "", location: "", mapsLink: "" });
      } else {
        setResponse("❌ Failed to send mail.");
      }

      console.log("Server Response:", text);
    } catch (err) {
      console.error("Error:", err);
      setResponse("❌ Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle>Send Your Location</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="address"
            placeholder="Your Address"
            value={form.address}
            onChange={handleChange}
            required
          />
          <Input
            name="location"
            placeholder="Your Location (City, State)"
            value={form.location}
            onChange={handleChange}
            required
          />
          <Input
            type="url"
            name="mapsLink"
            placeholder="Google Maps Link"
            value={form.mapsLink}
            onChange={handleChange}
            required
          />

          {response && <p className="text-sm text-center mt-2">{response}</p>}

          <DialogFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Send"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
