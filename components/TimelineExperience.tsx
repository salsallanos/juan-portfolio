import React from "react";
import { Timeline } from "@/components/ui/Timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "2019",
      content: (
        <div>
          <h1 className="text-xl lg:text-3xl leading-[1.6] text-white font-bold">Software & Mobile Environments Engineer</h1>
          <p className="text-base lg:text-lg leading-[1.6] text-white font-normal">BetterNOI</p>
          <p className="text-base lg:text-lg leading-[1.6] text-white-200 font-normal mb-4">May 2019 - Jan 2025 · 5 yrs 9 mos</p>
          
          <p className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md py-2">
            Developed multiple mobile applications, including one using PhoneGap and others in React Native, ensuring seamless cross-platform functionality.
          </p>
          <p className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md py-2">
            Maintained and enhanced the CMS platform by resolving issues, implementing new features, and creating custom templates to meet business requirements.
          </p>
          <p className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md py-2">
            Collaborated across teams to contribute to various projects, providing support and solutions as needed to meet tight deadlines.
          </p>
          <p className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-md py-2">
            Integrated the platform with Pipedrive to automate contract generation based on selected products and facilitated online document signing for clients.
          </p>
        </div>
      ),
    },
    {
      title: "2018",
      content: (
        <div>
          <h1 className="text-xl lg:text-3xl leading-[1.6] text-white font-bold">Software Engineer</h1>
          <p className="text-base lg:text-lg leading-[1.6] text-white font-normal">SIB Fixed Cost Reduction</p>
          <p className="text-base lg:text-lg leading-[1.6] text-white-200 font-normal mb-4">Jan 2018 - Apr 2019 · 1 yr 4 mos</p>
          
          <p className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm lg:text-base py-2">
            Developed custom Visualforce pages, Apex triggers, and workflows to enhance Salesforce functionality and meet business needs.
          </p>
          <p className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm lg:text-base py-2">
            Integrated Salesforce with QuickBooks to automate invoice data synchronization, improving efficiency and data accuracy.
          </p>
          <p className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm lg:text-base py-2">
            Collaborated with cross-functional teams to design and implement tailored solutions within the Salesforce ecosystem.
          </p>
          <p className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm lg:text-base py-2">
            Contributed to the development and maintenance of a new platform built with Python and Django, stepping in as needed to support key initiatives.
          </p>

        </div>
      ),
    },
    {
      title: "2015",
      content: (
        <div>
          <h1 className="text-xl lg:text-3xl leading-[1.6] text-white font-bold">Developer</h1>
          <p className="text-base lg:text-lg leading-[1.6] text-white font-normal">Border City Media</p>
          <p className="text-base lg:text-lg leading-[1.6] text-white-200 font-normal mb-4">Aug 2015 - Nov 2017 · 2 yrs 4 mos</p>

          <p className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm lg:text-base py-2">
            Enhanced and optimized internal management tools, improving efficiency and refining the user interface for a better experience.
          </p>
          <p className="flex gap-2 items-center text-neutral-700 dark:text-neutral-300 text-sm lg:text-base py-2">
            Implemented a 7-day trial feature, including activation and deactivation logic, ensuring smooth user access management.
          </p>

        </div>
      ),
    },
  ];
  return (
    <div className='pt-20' id='experience'>
      <h1 className='heading mb-10'>
        My {' '}
        <span className='text-purple'>work experience</span>
      </h1>
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  );
}
