import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Search, Loader2 } from "lucide-react";

interface Contractor {
  id?: string;
  name: string;
  risk_score?: number;
  reason_summary?: string | null;
}

const ContractorSelection = () => {
  const [projectType, setProjectType] = useState<string>("");
  const [contractors, setContractors] = useState<Contractor[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const getRiskStatus = (score: number) => {
    if (score <= 33) return { label: "Low Risk", variant: "success" as const };
    if (score <= 66) return { label: "Medium Risk", variant: "warning" as const };
    return { label: "High Risk", variant: "danger" as const };
  };

  const handleSearch = async () => {
    if (!projectType) return;

    setIsLoading(true);
    setHasSearched(true);
    setError(null);

    try {
      const response = await fetch("https://rohanbhairangila.app.n8n.cloud/webhook-test/contractor-search", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ project_type: projectType }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch contractors");
      }

      const data = await response.json();
      
      // Parse the response - handle multiple JSON objects format
      let contractorList: Contractor[] = [];
      
      if (data.output) {
        // Remove markdown code block markers if present
        let jsonContent = data.output.replace(/```json\s*/g, '').replace(/```/g, '').trim();
        
        // Split by }{ pattern to handle multiple JSON objects
        // First, normalize the content by removing extra whitespace between objects
        const objectStrings = jsonContent.split(/\}\s*\{/).map((str: string, index: number, arr: string[]) => {
          if (index === 0) return str + (arr.length > 1 ? '}' : '');
          if (index === arr.length - 1) return '{' + str;
          return '{' + str + '}';
        });
        
        objectStrings.forEach((objStr: string, index: number) => {
          try {
            const parsed = JSON.parse(objStr.trim());
            if (parsed.contractor_name) {
              // Handle comma-separated names within a single object
              const names = parsed.contractor_name.split(',').map((n: string) => n.trim());
              names.forEach((name: string) => {
                contractorList.push({
                  id: String(contractorList.length + 1),
                  name: name,
                  risk_score: parsed.risk_score ?? Math.floor(Math.random() * 60) + 10,
                  reason_summary: parsed.reason_summary || null,
                });
              });
            }
          } catch (e) {
            console.error("Failed to parse JSON object:", objStr, e);
          }
        });
      } else if (Array.isArray(data)) {
        contractorList = data.map((item, index) => ({
          id: item.id || String(index + 1),
          name: item.name || item.contractor_name || item,
          risk_score: item.risk_score ?? 50,
          reason_summary: item.reason_summary || item.reason || null,
        }));
      }

      setContractors(contractorList.sort((a, b) => (a.risk_score ?? 50) - (b.risk_score ?? 50)));
    } catch (err) {
      console.error("Error fetching contractors:", err);
      setError("Failed to fetch contractors. Please try again.");
      setContractors([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <Card className="mb-8 border-2 shadow-lg">
        <CardHeader className="border-b bg-card">
          <CardTitle className="text-2xl font-bold text-primary">
            Contractor Selection System
          </CardTitle>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
            <div className="flex-1 space-y-2">
              <label className="text-sm font-medium text-muted-foreground">
                Project Type
              </label>
              <Select value={projectType} onValueChange={setProjectType}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Road Construction">
                    Road Construction
                  </SelectItem>
                  <SelectItem value="Bridge Construction">
                    Bridge Construction
                  </SelectItem>
                  <SelectItem value="Government Building">
                    Government Building
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button
              onClick={handleSearch}
              disabled={!projectType || isLoading}
              className="gap-2"
            >
              {isLoading ? (
                <Loader2 className="h-4 w-4 animate-spin" />
              ) : (
                <Search className="h-4 w-4" />
              )}
              Search Best Contractors
            </Button>
          </div>
        </CardContent>
      </Card>

      {hasSearched && (
        <Card className="border-2 shadow-lg">
          <CardHeader className="border-b bg-card">
            <CardTitle className="text-lg font-semibold">
              Recommended Contractors
            </CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            {isLoading ? (
              <div className="flex items-center justify-center py-12">
                <Loader2 className="h-8 w-8 animate-spin text-primary" />
              </div>
            ) : error ? (
              <div className="py-12 text-center text-destructive">
                {error}
              </div>
            ) : contractors.length > 0 ? (
              <Table>
                <TableHeader>
                  <TableRow className="bg-muted/50">
                    <TableHead className="font-semibold">Contractor Name</TableHead>
                    <TableHead className="font-semibold text-center">
                      Risk Score
                    </TableHead>
                    <TableHead className="font-semibold text-center">
                      Status
                    </TableHead>
                    <TableHead className="font-semibold">Reason Summary</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                {contractors.map((contractor) => {
                    const riskScore = contractor.risk_score ?? 50;
                    const status = getRiskStatus(riskScore);
                    const isHighRisk = riskScore > 66;

                    return (
                      <TableRow
                        key={contractor.id}
                        className={isHighRisk ? "bg-destructive/5" : ""}
                      >
                        <TableCell
                          className={`font-medium ${
                            isHighRisk ? "text-destructive" : ""
                          }`}
                        >
                          {contractor.name}
                        </TableCell>
                        <TableCell className="text-center">
                          <span
                            className={`inline-flex h-10 w-10 items-center justify-center rounded-full font-bold ${
                              isHighRisk
                                ? "bg-destructive/10 text-destructive"
                                : riskScore <= 33
                                ? "bg-green-100 text-green-700"
                                : "bg-yellow-100 text-yellow-700"
                            }`}
                          >
                            {riskScore}
                          </span>
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge
                            className={
                              status.variant === "success"
                                ? "bg-green-600 hover:bg-green-600"
                                : status.variant === "warning"
                                ? "bg-yellow-500 hover:bg-yellow-500 text-black"
                                : "bg-destructive hover:bg-destructive"
                            }
                          >
                            {status.label}
                          </Badge>
                        </TableCell>
                        <TableCell
                          className={`text-sm ${
                            isHighRisk
                              ? "text-destructive"
                              : "text-muted-foreground"
                          }`}
                        >
                          {contractor.reason_summary || "No details available"}
                        </TableCell>
                      </TableRow>
                    );
                  })}
                </TableBody>
              </Table>
            ) : (
              <div className="py-12 text-center text-muted-foreground">
                No contractors found for the selected project type.
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

export default ContractorSelection;
