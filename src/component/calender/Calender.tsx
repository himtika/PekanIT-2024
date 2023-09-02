import {
  createTheme,
  Events,
  TextEvent,
  themes,
  Timeline,
} from "@merc/react-timeline";
import "react-calendar/dist/Calendar.css";

import "react-vertical-timeline-component/style.min.css";

const dateEvent = [
  {
    tahun: "2023",
    bulan: "Agustus",
    tanggal: "29",
    hari: "Selasa",
    jam: "00:01 am to 23:59",
    note: "Pendaftaran UI/UX, Software Development, dan Competitive Programming",
  },
  {
    tahun: "2023",
    bulan: "September",
    tanggal: "22",
    hari: "Jumat",
    jam: "0:01 am to 23:59 pm",
    note: "Batas akhir pengumpulan karya UI/UX & Software Development",
  },
  {
    tahun: "2023",
    bulan: "September",
    tanggal: "22",
    hari: "Minggu",
    jam: "8:00 am to 5:00 pm",
    note: "Pengumuman Finalis & Technical Meeting",
  },
  {
    tahun: "2023",
    bulan: "September",
    tanggal: "28",
    hari: "Kamis",
    jam: "8:00 am to 5:00 pm",
    note: "Pelaksanaan Seminar Pekan IT",
  },
  {
    tahun: "2023",
    bulan: "September",
    tanggal: "29",
    hari: "Jumat",
    jam: "8:00 am to 5:00 pm",
    note: "Presentasi Finalis UI/UX & Software Development, Pelaksanaan Lomba Competitive Programming",
  },
  {
    tahun: "2023",
    bulan: "September",
    tanggal: "30",
    hari: "Sabtu",
    jam: "8:00 am to 5:00 pm",
    note: "Pelaksanaan Workshop Pekan IT dan Pengumuman pemenang IT Competition",
  },
];

const customTheme = createTheme(themes.default, {
  card: {
    backgroundColor: "#efefef",
    color: "#000",
  },

  date: {
    backgroundColor: "#2f8484",
  },
  marker: {
    borderColor: "#2f8484",
  },
  timelineTrack: {
    backgroundColor: "#2f8484",
  },
});

export default function Jadwal() {
  return (
    <>
      {/* <hr className="m-4" /> */}
      <div
        id="jadwal"
        className="sm:pb-14 md:pb-0 grid content-center  md:justify-center"
      >
        <p className="text-center overflow-hidden text-3xl text-white my-5">
          Timeline Pekan IT
        </p>
        <Timeline theme={customTheme} className="z-10">
          <Events className="z-10">
            {dateEvent.map((event, id) => {
              return (
                <TextEvent
                  key={id}
                  date={
                    event.hari +
                    ", " +
                    event.tanggal +
                    " " +
                    event.bulan +
                    event.tahun
                  }
                  text={event.note}
                />
              );
            })}
          </Events>
        </Timeline>
        {/* <VerticalTimeline animate={true} className="z-0">
          {dateEvent.map((event, id) => {
            return (
              <VerticalTimelineElement
                key={id}
                className="vertical-timeline-element--work "
                contentStyle={{
                  background: "#1b2354a0",
                  color: "#fff",
                }}
                contentArrowStyle={{
                  borderRight: "7px solid  rgb(33, 150, 243)",
                }}
                date={`${
                  event.hari + ", " + event.tanggal + " " + event.bulan
                }`}
                iconStyle={{
                  background: "rgb(33, 150, 243)",
                  color: "#fff",
                }}
              >
                <div>{event.note}</div>
              </VerticalTimelineElement>
            );
          })}
        </VerticalTimeline> */}
      </div>
    </>
  );
}
