import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Upload, Camera, MapPin, Loader2, CheckCircle } from "lucide-react";

const ReportDamage = () => {
  const [location, setLocation] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImage(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!image || !location) return;

    setIsSubmitting(true);

    const reader = new FileReader();
    reader.readAsDataURL(image);

    reader.onloadend = async () => {
      try {
        const dataUrl = reader.result as string;

        // 🔥 Extract PURE base64 (remove data:image/...;base64,)
        const base64Image = dataUrl.split(",")[1];

        await fetch(
          "https://rohanbhairangila.app.n8n.cloud/webhook-test/civic-report",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              image: base64Image,
              location: location,
            }),
          }
        );

        setIsSubmitted(true);
      } catch (err) {
        console.error("Webhook error:", err);
      } finally {
        setIsSubmitting(false);
      }
    };
  };

  const handleReset = () => {
    setLocation("");
    setImage(null);
    setImagePreview(null);
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card className="mx-auto max-w-lg border-2 shadow-lg">
          <CardContent className="flex flex-col items-center justify-center py-16">
            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
              <CheckCircle className="h-12 w-12 text-green-600" />
            </div>
            <h2 className="mb-2 text-xl font-bold">Issue Received</h2>
            <p className="mb-8 text-center text-muted-foreground">
              Issue received and under analysis
            </p>
            <Button onClick={handleReset} variant="outline">
              Report Another Issue
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mx-auto max-w-lg border-2 shadow-lg">
        <CardHeader className="border-b">
          <CardTitle className="text-2xl font-bold text-primary">
            Report Civic Damage
          </CardTitle>
        </CardHeader>

        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload */}
            <div className="space-y-2">
              <Label>Upload Image of Damage</Label>

              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                capture="environment"
                className="hidden"
              />

              {imagePreview ? (
                <div className="relative">
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="h-48 w-full rounded-lg object-cover border"
                  />
                  <Button
                    type="button"
                    size="sm"
                    variant="secondary"
                    className="absolute bottom-2 right-2"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    Change Image
                  </Button>
                </div>
              ) : (
                <div
                  onClick={() => fileInputRef.current?.click()}
                  className="flex h-48 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg border-2 border-dashed"
                >
                  <Camera />
                  <Upload />
                  <p className="text-sm text-muted-foreground">
                    Click to capture or upload image
                  </p>
                </div>
              )}
            </div>

            {/* Location */}
            <div className="space-y-2">
              <Label htmlFor="location">Location</Label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2" />
                <Input
                  id="location"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="XYZ Bridge, Ahmedabad"
                  className="pl-10"
                  required
                />
              </div>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              className="w-full gap-2"
              disabled={!image || !location || isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                "Report Issue"
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default ReportDamage;
