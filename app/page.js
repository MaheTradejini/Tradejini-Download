"use client";
import { Button } from "@/components/ui/button";
import Typed from "typed.js";
import React, { useRef, useEffect, useState } from "react";
import { FaFilePdf, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { HiArrowRightCircle } from "react-icons/hi2";

import Image from "next/image";
import { AlarmPlus } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);
  const [activeTabMod, setActiveTabMod] = useState(0);
  const [activeTabInc, setActiveTabInc] = useState(0);

  const handleAccordionToggle = (index) => {
    setOpenAccordion((prevOpenAccordion) =>
      prevOpenAccordion.includes(index)
        ? prevOpenAccordion.filter((i) => i !== index)
        : [...prevOpenAccordion, index]
    );
  };

  const handleCardClick1 = () => {
    window.open(
      "https://cp.tradejini.com/Ox1Ux9?_gl=1*aampo0*_ga*MTU2MTkwMTcyNi4xNzI1MjcxMzEx*_ga_PYZ3N13XX4*MTcyOTg1NjM3OC41MC4xLjE3Mjk4NTY2NDYuMC4wLjA",
      "_blank"
    );
  };

  const handleCardClick = (pdfUrl) => {
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = pdfUrl.split("/").pop();
    link.click();
  };

  const applicationData = [
    {
      title: "Equities, Derivatives and Currency Trading",
      pdfs: [
        {
          title: "Guidance Note",
          url: "/files/Application Forms/Equities, Derivatives and Currency Trading/1. Guidance Note.pdf",
        },
        {
          title: "Rights And Obligations",
          url: "/files/Application Forms/Equities, Derivatives and Currency Trading/2. Rights And Obligations.pdf",
        },
        {
          title: "Risk Disclosure Document (RDD)",
          url: "/files/Application Forms/Equities, Derivatives and Currency Trading/3. Risk Disclosure Document (RDD).pdf",
        },
        {
          title: "Additional RDD for Options",
          url: "/files/Application Forms/Equities, Derivatives and Currency Trading/4. Additional RDD for Options.pdf",
        },
        {
          title: "Policies And Procedures",
          url: "/files/Application Forms/Equities, Derivatives and Currency Trading/5. Policies And Procedures.pdf",
        },
        {
          title: "VernacularLanguages",
          url: "/files/Application Forms/Equities, Derivatives and Currency Trading//Vernacular Languages/PNP_in_Diff__Languages-1.zip",
        },
      ],
    },
    {
      title: "Commodities Trading",
      pdfs: [
        {
          title: "Guidance Note",
          url: "/files/Application Forms/Commodity Trading/1.  Guidance Note.pdf",
        },
        {
          title: "Rights And Obligations",
          url: "/files/Application Forms/Commodity Trading/2. Rights And Obligations.pdf",
        },
        {
          title: "Risk Disclosure Document (RDD)",
          url: "/files/Application Forms/Commodity Trading/3. Risk Disclosure Document (RDD).pdf",
        },
        {
          title: "Commodity RMS Policy",
          url: "/files/Application Forms/Commodity Trading/4. Commodity RMS Policy.pdf",
        },
        {
          title: "Vernacular Languages",
          url: "/files/Application Forms/Commodity Trading/Vernacular Languages/PNP_in_Diff__Languages-1.zip",
        },
      ],
    },
    {
      title: "Demat",
      pdfs: [
        {
          title: "DDPI Form",
          url: "/files/Application Forms/Demat/1. DDPI Form.pdf",
        },
        {
          title: "Rights And Obligations ",
          url: "/files/Application Forms/Demat/2. Rights And Obligations.pdf",
        },
      ],
    },
  ];

  const modificationData = [
    {
      title: "Equities, Derivatives and Currency Trading",
      pdfs: [
        {
          title: "Dormant Account Reactivation Form",
          url: "/files/Modification Forms/Equities, Derivatives and Currency Trading/1.  Dormant Account Reactivation Form.pdf",
        },
        {
          title: "Modification Form (Except Bank)",
          url: "/files/Modification Forms/Equities, Derivatives and Currency Trading/2. Modification Form (Except Bank).pdf",
        },
        {
          title: "Account Closure Form",
          url: "/files/Modification Forms/Equities, Derivatives and Currency Trading/3.  Account Closure Form.pdf",
        },
        {
          title: "Additional Segment Enablement",
          url: "/files/Modification Forms/Equities, Derivatives and Currency Trading/4. Additional Segment Enablement.pdf",
        },
        {
          title: "Bank Details Modification Forms",
          url: "/files/Modification Forms/Equities, Derivatives and Currency Trading/5. Bank Details Modification Forms.pdf",
        },
        {
          title: "Common Mobile Number & EmailId Declaration",
          url: "/files/Modification Forms/Equities, Derivatives and Currency Trading/6. Common Mobile Number & EmailId Declaration.pdf",
        },
        {
          title: "NOC for Joint Account",
          url: "/files/Modification Forms/Equities, Derivatives and Currency Trading/7. NOC for Joint Account.pdf",
        },
      ],
    },
    {
      title: "Demat",
      pdfs: [
        {
          title: "New DIS Form Issue",
          url: "/files/Modification Forms/Demat/1. New DIS Form Issue.pdf",
        },
        {
          title: "Nomination Form",
          url: "/files/Modification Forms/Demat/2. Nomination Form.pdf",
        },
        {
          title: "Dematerialisation Request Form",
          url: "/files/Modification Forms/Demat/3. Dematerialisation Request Form.pdf",
        },
        {
          title: "Pledge Request Form",
          url: "/files/Modification Forms/Demat/4. Pledge Request Form.pdf",
        },
        {
          title: "Unpledge Request Form",
          url: "/files/Modification Forms/Demat/5. Unpledge Request Form.pdf",
        },
        {
          title: "Transposition Request Form",
          url: "/files/Modification Forms/Demat/6. Transposition Request Form.pdf",
        },
        {
          title: "Transmission cum Dematerialisation",
          url: "/files/Modification Forms/Demat/7. Transmission cum Dematerialisation.pdf",
        },
        {
          title: "Transmission Form Sole Holder",
          url: "/files/Modification Forms/Demat/8. Transmission Form Sole Holder.pdf",
        },
        {
          title: "Transmission Without Nominee",
          url: "/files/Modification Forms/Demat/9.  Transmission Without Nominee.pdf",
        },
        {
          title: "Transmission Form Joint Holder",
          url: "/files/Modification Forms/Demat/10. Transmission Form Joint Holder.pdf",
        },
        {
          title: "Destatementization Request Form",
          url: "/files/Modification Forms/Demat/11. Destatementization Request Form.pdf",
        },
        {
          title: "BO Seller Buyer link",
          url: "/files/Modification Forms/Demat/12. BO Seller Buyer link.pdf",
        },
      ],
    },
  ];

  const investorData = [
    {
      title: "Equities, Derivatives and Currency Trading",
      pdfs: [
        {
          title: "Investor Charter",
          url: "/files/Investor’s corner/Equities, Derivatives and Currency Trading/1. Investor Charter.pdf",
        },
        {
          title: "Advisory for Investors",
          url: "/files/Investor’s corner/Equities, Derivatives and Currency Trading/2.  Advisory for Investors.pdf",
        },
        {
          title: "Investor Awareness",
          url: "/files/Investor’s corner/Equities, Derivatives and Currency Trading/3.  Investor Awareness.pdf",
        },
        {
          title: "Investors Education",
          url: "https://www.bseipf.com/investors_education.html",
        },
        {
          title: "Voluntary Freezing Blocking Facility Policy",
          url: "/files/Investor’s corner/Equities, Derivatives and Currency Trading/5. Voluntary Freezing Blocking Facility Policy.pdf",
        },
      ],
    },
    {
      title: "Investor Grievance",
      pdfs: [
        {
          title: "Investor Grievance",
          url: "/files/Investor’s corner/Investor Grievance/1. Investor Grievance.pdf",
        },
      ],
    },
    {
      title: "Demat",
      pdfs: [
        {
          title: "Investor Charter-DP",
          url: "/files/Investor’s corner/Demat/1. Investor Charter-DP.pdf",
        },
      ],
    },
    {
      title: "Risks",
      pdfs: [
        {
          title: "Risk Disclosures on Derivatives",
          url: "https://tradejini.com/risk-disclosure-on-derivatives/",
        },
      ],
    },
  ];

  return (
    <main>
      {/* <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Software
            </h2>
          </div>
          <div className="flex flex-wrap justify-center">
         
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800  transform transition duration-500 hover:scale-105 text-center cursor-pointer"
                onClick={() => handleCardClick("/path/to/pdf1.pdf")}
              >
                <HiArrowRightCircle className="text-4xl text-[#118b64] dark:text-[#118b64] mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">CUBEPLUS</p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Software
            </h2>
          </div>
          <div className="flex flex-wrap justify-center">
            {/* Card 1 */}
            <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
              <div
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center cursor-pointer hover:bg-gradient-to-br hover:from-green-200 hover:to-transparent"
                onClick={handleCardClick1}
              >
                <HiArrowRightCircle className="text-4xl text-[#118b64] dark:text-[#118b64] mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">CUBEPLUS</p>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="py-12 bg-white dark:bg-gray-900">
  <div className="container px-4 mx-auto">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
        Application Forms
      </h2>
    </div>
    <div className="flex flex-wrap justify-center mb-8">
      {applicationData.map((tab, index) => (
        <button
          key={index}
          className={`px-4 py-2 mx-2 mb-2 sm:mb-0 text-lg font-semibold rounded w-full sm:w-auto ${
            activeTab === index
              ? "bg-[#04ae87] text-white"
              : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
          }`}
          onClick={() => setActiveTab(index)}
        >
          {tab.title}
        </button>
      ))}
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {applicationData[activeTab].pdfs.map((pdf, pdfIndex) => (
        <div
          key={pdfIndex}
          className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center hover:bg-gradient-to-br hover:from-green-100 hover:to-transparent hover:font-bold cursor-pointer"
          onClick={() => handleCardClick(pdf.url)}
        >
          <FaFilePdf className="text-4xl text-[#118b64] dark:text-[#118b64] mx-auto mb-4" />
          <p className="text-gray-600 dark:text-gray-400">{pdf.title}</p>
        </div>
      ))}
    </div>
  </div>
</section>





      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Application Forms
            </h2>
          </div>
          <div className="flex flex-wrap justify-center mb-8">
            {applicationData.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-2 mb-2 sm:mb-0 text-lg font-semibold rounded w-full sm:w-auto ${
                  activeTab === index
                    ? "bg-[#04ae87] text-white"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {applicationData[activeTab].pdfs.map((pdf, pdfIndex) => (
              <div
                key={pdfIndex}
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center hover:bg-gradient-to-br hover:from-green-100 hover:to-transparent hover:font-bold cursor-pointer"
                onClick={() => handleCardClick(pdf.url)}
              >
                <FaFilePdf className="text-4xl text-[#118b64] dark:text-[#118b64] mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">{pdf.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Modification Forms
            </h2>
          </div>
          <div className="flex flex-wrap justify-center mb-8">
            {modificationData.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-2 mb-2 sm:mb-0 text-lg font-semibold rounded w-full sm:w-auto ${
                  activeTabMod === index
                    ? "bg-[#04ae87] text-white"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setActiveTabMod(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {modificationData[activeTabMod].pdfs.map((pdf, pdfIndex) => (
              <div
                key={pdfIndex}
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center hover:bg-gradient-to-br hover:from-green-100 hover:to-transparent hover:font-bold cursor-pointer"
                onClick={() => handleCardClick(pdf.url)}
              >
                <FaFilePdf className="text-4xl text-[#118b64] dark:text-[#118b64] mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">{pdf.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Investor's Corner
            </h2>
          </div>
          <div className="flex flex-wrap justify-center mb-8">
            {investorData.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-2 mb-2 sm:mb-0 text-lg font-semibold rounded w-full sm:w-auto ${
                  activeTabInc === index
                    ? "bg-[#04ae87] text-white"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setActiveTabInc(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {investorData[activeTabInc].pdfs.map((pdf, pdfIndex) => (
              <div
                key={pdfIndex}
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center hover:bg-gradient-to-br hover:from-green-100 hover:to-transparent hover:font-bold cursor-pointer"
                onClick={() => handleCardClick(pdf.url)}
              >
                <FaFilePdf className="text-4xl text-[#118b64] dark:text-[#118b64] mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">{pdf.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Application Forms
            </h2>
          </div>
          <div className="flex justify-center mb-8">
            {applicationData.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-2 text-lg font-semibold rounded ${
                  activeTab === index
                    ? "bg-[#04ae87] text-white"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setActiveTab(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {applicationData[activeTab].pdfs.map((pdf, pdfIndex) => (
              <div
                key={pdfIndex}
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center hover:bg-gradient-to-br hover:from-green-100 hover:to-transparent hover:font-bold cursor-pointer"
                onClick={() => handleCardClick(pdf.url)}
              >
                <FaFilePdf className="text-4xl text-[#118b64] dark:text-[#118b64] mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">{pdf.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Modification Forms
            </h2>
          </div>
          <div className="flex justify-center mb-8">
            {modificationData.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-2 text-lg font-semibold rounded ${
                  activeTabMod === index
                    ? "bg-[#04ae87] text-white"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setActiveTabMod(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {modificationData[activeTabMod].pdfs.map((pdf, pdfIndex) => (
              <div
                key={pdfIndex}
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center hover:bg-gradient-to-br hover:from-green-100 hover:to-transparent hover:font-bold cursor-pointer"
                onClick={() => handleCardClick(pdf.url)}
              >
                <FaFilePdf className="text-4xl text-[#118b64] dark:text-[#118b64] mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">{pdf.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-white dark:bg-gray-900">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 dark:text-gray-200">
              Investor's Corner
            </h2>
          </div>
          <div className="flex justify-center mb-8">
            {investorData.map((tab, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-2 text-lg font-semibold rounded ${
                  activeTabInc === index
                    ? "bg-[#04ae87] text-white"
                    : "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                }`}
                onClick={() => setActiveTabInc(index)}
              >
                {tab.title}
              </button>
            ))}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {investorData[activeTabInc].pdfs.map((pdf, pdfIndex) => (
              <div
                key={pdfIndex}
                className="p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 transform transition duration-500 hover:scale-105 text-center hover:bg-gradient-to-br hover:from-green-100 hover:to-transparent hover:font-bold cursor-pointer"
                onClick={() => handleCardClick(pdf.url)}
              >
                <FaFilePdf className="text-4xl text-[#118b64] dark:text-[#118b64] mx-auto mb-4" />
                <p className="text-gray-600 dark:text-gray-400">{pdf.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}
