'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronRight } from 'lucide-react';

const Breadcrumb: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split('/').filter(segment => segment);

  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-gray-100 shadow-sm">
      <div className="container mx-auto px-4">
        <nav aria-label="Breadcrumb" className="bg-gradient-to-r from-teal-600 to-teal-700 p-2 rounded-md shadow-md">
          <ol className="flex items-center space-x-1 text-xs md:text-sm text-white overflow-x-auto whitespace-nowrap">
            <li>
              <Link href="/" className="hover:text-yellow-400 hover:underline transition duration-300">
                Home
              </Link>
            </li>
            {pathSegments.map((segment, index) => {
              const href = `/${pathSegments.slice(0, index + 1).join('/')}`;
              const isLast = index === pathSegments.length - 1;
              const title = segment.charAt(0).toUpperCase() + segment.slice(1).replace(/-/g, ' ');

              return (
                <React.Fragment key={href}>
                  <ChevronRight className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                  <li>
                    {isLast ? (
                      <span className="text-yellow-400 font-semibold">{title}</span>
                    ) : (
                      <Link href={href} className="hover:text-yellow-400 hover:underline transition duration-300">
                        {title}
                      </Link>
                    )}
                  </li>
                </React.Fragment>
              );
            })}
          </ol>
        </nav>
      </div>
    </div>
  );
};

export default Breadcrumb;