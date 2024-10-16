"use client";

import Link from "next/link";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

export default function Pagination({ totalPages }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const previousPage = currentPage > 1 ? currentPage - 1 : 1;
  const nextPage = currentPage < totalPages ? currentPage + 1 : totalPages;
  const { replace } = useRouter();
  return (
    <div className="text-white flex gap-3 justify-end">
      {currentPage > 1 ? (
        <button
          className="text-lg flex items-center gap-2 bg-[#ffaa00] rounded-full px-3 py-2 border-2 border-[#ffaa00] hover:bg-transparent transition-all"
          onClick={() => {
            const params = new URLSearchParams(searchParams);
            params.set("page", previousPage);
            console.log(`${pathname}?${params.toString()}`);
            replace(`${pathname}?${params.toString()}`);
          }}
        >
          <BiLeftArrowAlt size={25} /> Previous
        </button>
      ) : null}
      {currentPage < totalPages ? (
        <button
          className="text-lg flex items-center gap-2 bg-[#ffaa00] rounded-full px-3 py-2 border-2 border-[#ffaa00] hover:bg-transparent transition-all"
          onClick={() => {
            const params = new URLSearchParams(searchParams);
            params.set("page", nextPage);
            console.log(`${pathname}?${params.toString()}`);
            replace(`${pathname}?${params.toString()}`);
          }}
        >
          Next Page <BiRightArrowAlt size={25} />
        </button>
      ) : null}
    </div>
  );
}
