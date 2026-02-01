# 🏙️ Municipal Infrastructure Management System
## AI-Driven Contractor Selection & Civic Accountability Platform

---

## 📌 Overview
Urban infrastructure such as roads, bridges, and government buildings forms the backbone of any smart city. Despite heavy public investment, cities continue to face recurring infrastructure failures, unsafe conditions, and repeated repairs of the same assets. The root cause is not limited to construction quality alone, but the lack of **continuous accountability, real-time feedback, and data-driven governance**.

This project introduces an **AI-powered infrastructure management system** that creates a permanent feedback loop between contractor performance and real-world infrastructure conditions. The platform ensures that every citizen-reported issue directly influences contractor credibility and future project allocation, making governance proactive rather than reactive.

Unlike conventional systems, this solution is designed to **learn continuously**, evolve with real-world data, and enforce accountability automatically.

Live deployed link - https://0-to-1.vercel.app/

NOTE - The above link may not perform some operations as n8n backend has to be runned locally. Hence you can refer the demo video below explaining the full working.

Demo video link - https://drive.google.com/file/d/1JEdTDOx1mH8c3U_RGTiQmrWT3arAfVT5/view?usp=drivesdk

---

## 🎯 Problem Statement
- Contractor selection is typically based on static records and one-time evaluations.
- Post-completion infrastructure quality is rarely tracked systematically.
- Civic complaints are handled in isolation and do not affect contractor credibility.
- Poor-performing contractors continue to receive projects due to lack of measurable penalties.
- Small infrastructure defects escalate into major safety hazards due to delayed response.

There is currently no integrated system that connects **citizen feedback, AI-based damage assessment, and contractor accountability** into a unified governance framework.

---

## 💡 Proposed Solution
The proposed system combines **automation, AI-based image analysis, and risk scoring** to deliver a closed-loop public infrastructure governance platform.

The solution operates through two tightly integrated modules:

---

## 1️⃣ Contractor Selection & Risk Evaluation Module
- Maintains detailed contractor profiles with historical performance metrics.
- Calculates a **dynamic risk score (0–100)** for each contractor.
- Risk score factors include:
  - Average project delay
  - Rework frequency
  - Fake closure history
  - Past infrastructure failures
- Contractors are ranked in ascending order of risk for transparent project allocation.
- Each recommendation is accompanied by **clear reasoning**, enabling explainable decision-making.

This ensures that public contracts are awarded based on **proven reliability**, not assumptions or influence.

---

## 2️⃣ Civic Damage Reporting & AI Analysis Module
- Citizens can report damaged infrastructure by uploading images and location details.
- AI-based computer vision models analyze visible damage objectively.
- The system assigns a **damage risk score (0–100)** based on severity.
- Asset location data is used to identify the responsible contractor.
- Contractor risk scores are updated automatically based on damage severity.

This transforms civic complaints into **actionable intelligence** rather than passive reports.

---

## 🔁 Continuous Accountability Loop (Core Innovation)

```
Contractor Selection
        ↓
Project Execution
        ↓
Citizen Reports Damage
        ↓
AI Analyzes Damage Severity
        ↓
Contractor Risk Score Updated
        ↓
Re-ranked Contractor List
        ↓
Future Project Allocation
        ↓
(Loop continues indefinitely)
```

> **Bad work today reduces your chances tomorrow — automatically.**

This loop ensures that accountability is continuous, measurable, and irreversible without improved performance.

---

## 📊 Contractor Risk Scoring Mechanism

### Risk Score Range
- **0–30** → Low Risk (Highly Recommended)
- **31–60** → Medium Risk (Use with Caution)
- **61–100** → High Risk (Avoid / Escalate)

### Risk Score Update Logic
- Damage severity directly contributes to risk score increase.
- Repeated reports accelerate penalty accumulation.
- Risk score is capped at 100.
- All changes are logged for audit safety.

---

## 🧠 Reasoning & Explainability
Every system decision is accompanied by transparent reasoning, including:
- Why a specific contractor was recommended
- Key factors influencing current risk score
- Historical performance trends
- Recent damage incidents linked to the contractor

This ensures the AI remains **explainable, auditable, and trustworthy** for government use.

---

## 🛠️ Technology Stack

### Frontend
- React-based responsive web interface
- Citizen-friendly reporting UI
- Official-style dashboard for authorities

### Backend & Automation
- n8n workflow automation
- Webhook-based orchestration
- Modular event-driven design

### Artificial Intelligence
- Vision-enabled AI models for damage assessment
- Rule-based and weighted risk scoring logic

### Data Management
- Google Sheets for contractor records, assets, and escalations
- Easy administrative access and rapid prototyping

---

## 📈 Impact & Benefits
- Prevents repeated infrastructure failures
- Enforces contractor accountability
- Improves public safety
- Reduces corruption and manual bias
- Empowers citizens in governance
- Enables smarter public spending

---

## 🔮 Future Scope
- GIS-based location validation
- Predictive maintenance alerts
- Mobile app integration
- Integration with municipal ERP systems
- Long-term contractor performance analytics

---

## 🏁 Conclusion
The proposed system transforms public infrastructure management into a **self-correcting, AI-driven governance ecosystem**. By directly linking citizen feedback with contractor accountability, the platform ensures that infrastructure quality continuously improves over time.

---

## 👥 Team
- Rudra Patel  
- Yug Shah  
- Rohan Thakkar  
- Ronit Shah  

**College:** Vishwakarma Government Engineering College
