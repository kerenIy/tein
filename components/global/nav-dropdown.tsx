"use client";

import { companyLinks } from "@/lib/compant-links";
import Link from "next/link";

export const CompanyDropdown = () => {
  return (
    <div className="grid grid-cols-3 gap-6 p-6 bg-white shadow-lg rounded-xl w-[720px]">
      {companyLinks.map(({ title, subtitle, href }) => (
        <Link
          key={title}
          href={href}
          className="group hover:bg-gray-50 p-3 rounded-md transition-colors"
        >
          <h4 className="text-lg font-semibold text-black group-hover:text-blue-700">
            {title}
          </h4>
          <p className="text-sm text-indigo-900">{subtitle}</p>
        </Link>
      ))}
    </div>
  );
};
