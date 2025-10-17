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
import { Textarea } from "@/components/ui/textarea";

interface ContactModalProps {
  open: boolean;
  clickType: string; // Slide title
  onClose: () => void;
}

export default function ContactModal({
  open,
  onClose,
  clickType,
}: ContactModalProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    query: "",
  });
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("query", form.query);
      formData.append("clickType", clickType); // slide title or context

      const res = await fetch("https://balunstech.com/send_email.php", {
        method: "POST",
        body: formData,
      });

      const text = await res.text();

      if (res.ok) {
        setResponse("✅ Message sent successfully!");
        setForm({ name: "", email: "", phone: "", query: "" });
      } else {
        setResponse("❌ Failed to send message.");
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
          <DialogTitle>Contact Us</DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
          <Textarea
            name="query"
            placeholder="Your Query"
            value={form.query}
            onChange={handleChange}
            required
          />

          {response && (
            <p className="text-sm text-center mt-2">{response}</p>
          )}

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
