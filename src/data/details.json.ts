export interface Template {
  link: string;
  title: string;
  location: string;
  date: string;
};
const one: Template = {
  link: "https://lawbrokr.com",
  title: "Software Developer Co-Op",
  location: "Remote",
  date: "Since Jun. 2023",
};
const two: Template = {
link: "https://www.gostudent.org/en-gb/home/",
  title: "Private Tutor",
  location: "Remote",
  date: "Jan. 2022 - Aug. 2022",
};
const three: Template = {
link: "https://www.eodsa.ca/",
  title: "Soccer Referee",
  location: "Ottawa, Ontario",
  date: "May 2016 – Aug. 2017",
};

export const bytitle = {
  one,
    two,
    three
};
export const details = Object.values(bytitle);
