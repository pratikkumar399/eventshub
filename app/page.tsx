import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, MapPin, Calendar } from 'lucide-react'
import Link from 'next/link'

export default function Home() {
  const featuredEvents = [
    { id: 1, name: "Summer Music Festival", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", location: "New York, USA", date: "Aug 15-17, 2023" },
    { id: 2, name: "Tech Conference 2023", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", location: "San Francisco, USA", date: "Sep 5-7, 2023" },
    { id: 3, name: "Food & Wine Expo", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", location: "Paris, France", date: "Oct 10-12, 2023" },
  ]

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <section className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Discover Amazing Events</h1>
        <p className="text-xl text-muted-foreground mb-8">Find and book tickets for concerts, festivals, conferences, and more!</p>
        <div className="flex justify-center space-x-4 mb-8">
          <Input className="max-w-sm" placeholder="Search events..." />
          <Button>
            <Search className="mr-2 h-4 w-4" /> Search
          </Button>
        </div>
        <div className="flex justify-center space-x-4">
          <Button variant="outline">
            <MapPin className="mr-2 h-4 w-4" /> Browse by Location
          </Button>
          <Button variant="outline">
            <Calendar className="mr-2 h-4 w-4" /> Browse by Date
          </Button>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-3xl font-semibold mb-8">Featured Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
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
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Explore?</h2>
        <p className="text-xl text-muted-foreground mb-8">Browse our full catalog of events and find your next adventure!</p>
        <Button asChild size="lg">
          <Link href="/events">View All Events</Link>
        </Button>
      </section>
    </div>
  )
}