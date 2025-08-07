import Link from 'next/link';
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './card';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import { Button } from './button';

function PostCard({posts}) {
  const { title,href, image, category, excerpt, readTime, date} =
    posts;
    return (
    <>
           <Link  
           href={href}
           >
           <Card 
              className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <div className="relative overflow-hidden">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-70 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {category}
                  </span>
                </div>
              </div>

              {/* <CardHeader className="pb-2">
                <div className="flex items-center space-x-4 text-sm text-slate-500 mb-2">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>{date}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{readTime}</span>
                  </div>
                </div>
                <CardTitle className="text-xl group-hover:text-orange-500 transition-colors">
                  {title}
                </CardTitle>
              </CardHeader>

              <CardContent>
                <p className="text-slate-600 mb-4 line-clamp-3">
                  {excerpt}
                </p>
                <Button
                  variant="ghost"
                  className="p-0 h-auto font-medium text-orange-500 hover:text-amber-700 group/btn"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent> */}
            </Card>
          </Link>

    </>
  )
}

export default PostCard
