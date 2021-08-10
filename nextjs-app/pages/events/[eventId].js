import EventSummary from "../../components/events/event-detail/event-summary";
import EventLogistics from "../../components/events/event-detail/event-logistics";
import EventContent from "../../components/events/event-detail/event-content";
import { getEventById } from "../../dummy-data";
import { useRouter } from "next/router";
import ErrorAlert from "../../components/ui/error-alert";

function EventDetailPage() {
  const router = useRouter();

  const eventId = router.query.eventId;
  const event = getEventById(eventId);
  if (!event) {
    return (
      <ErrorAlert>
        <p>no event found!</p>
      </ErrorAlert>
    );
  }
  return (
    <div>
      <>
        <EventSummary title={event.title} />
        <EventLogistics
          date={event.date}
          address={event.location}
          image={event.image}
          imageAls={event.title}
        />
        <EventContent>
          <p>{event.description}</p>
        </EventContent>
      </>
    </div>
  );
}

export default EventDetailPage;
