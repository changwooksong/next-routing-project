import DateIcon from "../icons/date-icon";
import Button from "../ui/button";
import AddressIcon from "../icons/address-icon";
import ArrowRightIcon from "../icons/arrow-right-icon";
import styled from "./EventItem.module.css";

const EventItem = (props) => {
    const { title, image, date, location, id } = props;

    const humanReadableDate = new Date(date).toLocaleDateString("ko-KR", {
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    const formattedAddress = location.replace(", ", "\n");
    const exploreLink = `/events/${id}`;

    console.log(humanReadableDate);

    return (
        <li className={styled.item}>
            <img src={"/" + image} alt={title} />
            <div className={styled.content}>
                <div className={styled.summary}>
                    <h2>{title}</h2>
                    <div className={styled.date}>
                        <DateIcon />
                        <time>{humanReadableDate}</time>
                    </div>
                    <div className={styled.address}>
                        <AddressIcon />
                        <address>{formattedAddress}</address>
                    </div>
                </div>
                <div className={styled.actions}>
                    <Button link={exploreLink}>
                        <span>Explore Event</span>
                        <span className={styled.icon}>
                            <ArrowRightIcon />
                        </span>
                    </Button>
                </div>
            </div>
        </li>
    );
};

export default EventItem;
