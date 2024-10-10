import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, Clock, Ticket } from 'lucide-react'

const events = [
  { id: 1, name: "Summer Music Festival", image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", location: "Central Park, New York, USA", date: "Aug 15-17, 2023", time: "12:00 PM - 11:00 PM", price: "$150", description: "Join us for three days of non-stop music featuring top artists from around the world. Experience unforgettable performances, great food, and amazing vibes in the heart of New York City." },
  { id: 2, name: "Tech Conference 2023", image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", location: "Moscone Center, San Francisco, USA", date: "Sep 5-7, 2023", time: "9:00 AM - 6:00 PM", price: "$499", description: "Discover the latest innovations in technology at our annual conference. Network with industry leaders, attend workshops, and get hands-on experience with cutting-edge products." },
  { id: 3, name: "Food & Wine Expo", image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80", location: "Porte de Versailles, Paris, France", date: "Oct 10-12, 2023", time: "11:00 AM - 8:00 PM", price: "€75", description: "Indulge in a gastronomic adventure featuring world-renowned chefs, exquisite wines, and culinary masterpieces. Explore food trends, attend cooking demonstrations, and savor flavors from around the globe." },
]

export function generateStaticParams() {
  return events.map((event) => ({
    id: event.id.toString(),
  }))
}

export default function EventDetailPage({ params }: { params: { id: string } }) {
  const event = events.find(e => e.id === parseInt(params.id))

  if (!event) {
    return <div>Event not found</div>
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-3xl">{event.name}</CardTitle>
          <CardDescription>
            <p><MapPin className="inline mr-2 h-4 w-4" />{event.location}</p>
            <p><Calendar className="inline mr-2 h-4 w-4" />{event.date}</p>
            <p><Clock className="inline mr-2 h-4 w-4" />{event.time}</p>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <img src={event.image} alt={event.name} className="w-full h-64 object-cover rounded-md mb-6" />
          <p className="text-lg mb-4">{event.description}</p>
          <p className="text-xl font-semibold mb-4"><Ticket className="inline mr-2 h-5 w-5" />Ticket Price: {event.price}</p>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button size="lg">Buy Tickets</Button>
          <Button variant="outline">Bookmark Event</Button>
        </CardFooter>
      </Card>
    </div>
  )
}