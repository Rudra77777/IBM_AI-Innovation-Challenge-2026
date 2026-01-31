import { Card, CardContent } from "@/components/ui/card";
import { Shield, FileWarning, Users, CheckCircle, Building2, ClipboardCheck } from "lucide-react";

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-12">

      {/* Hero Section */}
      <div className="mb-16 rounded-2xl bg-white/70 backdrop-blur-md p-8 text-center shadow-sm">
        <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-2">
          <Building2 className="mr-2 h-5 w-5 text-primary" />
          <span className="text-sm font-semibold text-primary">
            Official Government Portal
          </span>
        </div>

        <h1 className="mb-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl lg:text-6xl">
          Municipal Infrastructure
          <br />
          <span className="text-primary">Management System</span>
        </h1>

        <p className="mx-auto mb-6 max-w-3xl text-lg font-medium text-slate-700 md:text-xl">
          A comprehensive digital platform empowering municipal officers with data-driven
          contractor selection and enabling citizens to report civic infrastructure issues
          for faster resolution and transparent governance.
        </p>

        <div className="flex items-center justify-center gap-2 text-sm font-medium text-slate-700">
          <CheckCircle className="h-4 w-4 text-primary" />
          <span>Trusted by 50+ Municipal Corporations</span>
        </div>
      </div>

      {/* Features Section */}
      <div className="mb-16">
        <h2 className="mb-8 text-center text-2xl font-extrabold text-slate-900">
          Platform Capabilities
        </h2>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            {
              icon: <Users className="h-6 w-6 text-primary" />,
              title: "Smart Contractor Selection",
              desc:
                "AI-powered risk assessment analyzes past performance, compliance records, and project history to recommend the most reliable contractors.",
            },
            {
              icon: <FileWarning className="h-6 w-6 text-primary" />,
              title: "Civic Damage Reporting",
              desc:
                "Citizens can easily report infrastructure damage with photo evidence and location details for quick municipal response.",
            },
            {
              icon: <Shield className="h-6 w-6 text-primary" />,
              title: "Risk Assessment",
              desc:
                "Comprehensive risk scoring system helps identify potential issues before they impact project timelines and budgets.",
            },
            {
              icon: <ClipboardCheck className="h-6 w-6 text-primary" />,
              title: "Compliance Tracking",
              desc:
                "Monitor contractor compliance with government regulations and quality standards throughout project lifecycles.",
            },
            {
              icon: <Building2 className="h-6 w-6 text-primary" />,
              title: "Infrastructure Management",
              desc:
                "Centralized dashboard for managing roads, bridges, and government buildings across the municipal jurisdiction.",
            },
            {
              icon: <CheckCircle className="h-6 w-6 text-primary" />,
              title: "Transparent Governance",
              desc:
                "Public accountability through transparent project tracking and performance metrics for all stakeholders.",
            },
          ].map((item, index) => (
            <Card
              key={index}
              className="border-2 bg-white/90 shadow-md transition-shadow hover:shadow-lg"
            >
              <CardContent className="pt-6">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                  {item.icon}
                </div>
                <h3 className="mb-2 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="text-sm font-medium leading-relaxed text-gray-700">
                  {item.desc}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="mb-16 rounded-xl border-2 bg-white/80 backdrop-blur-md p-8 shadow-lg">
        <div className="grid gap-8 text-center md:grid-cols-4">
          <div>
            <p className="text-3xl font-extrabold text-primary">500+</p>
            <p className="text-sm font-medium text-gray-700">
              Registered Contractors
            </p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-primary">10,000+</p>
            <p className="text-sm font-medium text-gray-700">
              Issues Resolved
            </p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-primary">₹500Cr+</p>
            <p className="text-sm font-medium text-gray-700">
              Projects Managed
            </p>
          </div>
          <div>
            <p className="text-3xl font-extrabold text-primary">98%</p>
            <p className="text-sm font-medium text-gray-700">
              Satisfaction Rate
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-center">
      </div>
    </div>
  );
};

export default Index;
