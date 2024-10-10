"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Pagination } from "@/components/ui/pagination"
import { MapPin, Calendar, Search } from 'lucide-react'
import Link from 'next/link'

const events = [
  { id: 1, name: "Summer Music Festival", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", location: "New York, USA", date: "Aug 15-17, 2023", category: "Music" },
  { id: 2, name: "Tech Conference 2023", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", location: "San Francisco, USA", date: "Sep 5-7, 2023", category: "Technology" },
  { id: 3, name: "Food & Wine Expo", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", location: "Paris, France", date: "Oct 10-12, 2023", category: "Food" },
  { id: 4, name: "Art Gallery Opening", image: "https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", location: "London, UK", date: "Nov 3, 2023", category: "Art" },
  { id: 5, name: "Marathon 2023", image: "https://images.unsplash.com/photo-1513593771513-7b58b6c4af38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", location: "Berlin, Germany", date: "Sep 24, 2023", category: "Sports" },
  { id: 6, name: "Comedy Night", image: "https://images.unsplash.com/photo-1527224857830-43a7acc85260?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", location: "Chicago, USA", date: "Aug 30, 2023", category: "Entertainment" },
]

export default function EventsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [category, setCategory] = useState('all')

  const filteredEvents = events.filter(event => 
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) &&
    (category === 'all' || event.category === category)
  )

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-4xl font-bold mb-8">Explore Events</h1>

      <div className="flex flex-col md:flex-row justify-between items-center mb-8 space-y-4 md:space-y-0 md:space-x-4">
        <div className="flex-1 w-full md:w-auto">
          <Input
            placeholder="Search events..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full"
          />
        </div>
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger className="w-full md:w-[180px]">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Music">Music</SelectItem>
            <SelectItem value="Technology">Technology</SelectItem>
            <SelectItem value="Food">Food</SelectItem>
            <SelectItem value="Art">Art</SelectItem>
            <SelectItem value="Sports">Sports</SelectItem>
            <SelectItem value="Entertainment">Entertainment</SelectItem>
          </SelectContent>
        </Select>
        <Button>
          <Search className="mr-2 h-4 w-4" /> Search
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {filteredEvents.map((event) => (
          <Card key={event.id}>
            <CardHeader>
              <CardTitle>{event.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <img src={event.image} alt={event.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <CardDescription>
                <div><MapPin className="inline mr-2 h-4 w-4" />{event.location}</div>
                <div><Calendar className="inline mr-2 h-4 w-4" />{event.date}</div>
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild className="w-full">
                <Link href={`/events/${event.id}`}>View Details</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Pagination />
    </div>
  )
}