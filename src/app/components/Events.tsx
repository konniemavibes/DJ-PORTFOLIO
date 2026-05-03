import { motion } from "motion/react";
import { Calendar, MapPin, Clock, Ticket } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const events = [
  {
    name: "Neon Nights Festival",
    date: "Dec 15, 2024",
    time: "22:00 - 04:00",
    venue: "Electric Arena, Los Angeles",
    status: "Upcoming",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY3Jvd2R8ZW58MXx8fHwxNzY0NzIwMDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "Underground Sessions",
    date: "Dec 28, 2024",
    time: "23:00 - 06:00",
    venue: "The Basement, New York",
    status: "Limited Tickets",
    image: "https://images.unsplash.com/photo-1690013429722-87852aae164b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBsaWdodHN8ZW58MXx8fHwxNzY0NzU3MDAzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    name: "New Year's Eve Special",
    date: "Dec 31, 2024",
    time: "22:00 - 08:00",
    venue: "Skyline Club, Miami",
    status: "Sold Out",
    image: "https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwY3Jvd2R8ZW58MXx8fHwxNzY0NzIwMDU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function Events() {
  return (
    <section id="events" className="py-20 relative overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600 rounded-full blur-3xl opacity-10" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-600 rounded-full blur-3xl opacity-10" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl mb-4">Upcoming Events</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4" />
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Catch me live at these upcoming shows
          </p>
        </motion.div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {events.map((event, index) => (
            <motion.div
              key={event.name}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-800 hover:border-purple-500/50 transition-all">
                <div className="flex flex-col md:flex-row">
                  {/* Event Image */}
                  <div className="md:w-1/3 h-48 md:h-auto relative overflow-hidden">
                    <ImageWithFallback
                      src={event.image}
                      alt={event.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-gray-900/50" />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm backdrop-blur-sm ${
                        event.status === "Sold Out" 
                          ? "bg-red-500/80" 
                          : event.status === "Limited Tickets"
                          ? "bg-yellow-500/80"
                          : "bg-green-500/80"
                      }`}>
                        {event.status}
                      </span>
                    </div>
                  </div>

                  {/* Event Info */}
                  <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <h3 className="text-2xl md:text-3xl mb-4">{event.name}</h3>
                      
                      <div className="space-y-3 text-gray-400">
                        <div className="flex items-center gap-3">
                          <Calendar className="text-purple-500" size={20} />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Clock className="text-purple-500" size={20} />
                          <span>{event.time}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <MapPin className="text-purple-500" size={20} />
                          <span>{event.venue}</span>
                        </div>
                      </div>
                    </div>

                    <div className="mt-6">
                      <button 
                        className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                          event.status === "Sold Out"
                            ? "bg-gray-700 cursor-not-allowed"
                            : "bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/50"
                        }`}
                        disabled={event.status === "Sold Out"}
                      >
                        <Ticket size={20} />
                        {event.status === "Sold Out" ? "Sold Out" : "Get Tickets"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Past Events Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400 mb-4">Want to see past performances?</p>
          <button className="border border-purple-500/50 px-8 py-3 rounded-full hover:bg-purple-500/10 transition-all">
            View Archive
          </button>
        </motion.div>
      </div>
    </section>
  );
}
