import React from 'react';

interface DataTableProps {
  headers: string[];
  rows: (string | React.ReactNode)[][];
  caption?: string;
}

export default function DataTable({ headers, rows, caption }: DataTableProps) {
  return (
    <div className="my-6 overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
      <table className="min-w-full divide-y divide-gray-200 bg-white">
        {caption && (
          <caption className="bg-gray-50 px-4 py-2 text-left text-sm font-medium text-gray-700">
            {caption}
          </caption>
        )}
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200 bg-white">
          {rows.map((row, rowIndex) => (
            <tr key={rowIndex} className="hover:bg-gray-50">
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="whitespace-nowrap px-4 py-3 text-sm text-gray-700"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
