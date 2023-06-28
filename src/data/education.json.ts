export interface Template {
    link: string;
    degree: string;
    place: string;
    date: string;
  };
  const one: Template = {
    link: "https://uwaterloo.ca/future-students/programs/software-engineering",
    degree: "Bachelor of Software Engineering",
    place: "University of Waterloo",
    date: "Since Sept. 2022",
  };
  
  const two: Template = {
    link: "https://cegepoutaouais.qc.ca/programmes/programmes-preuniversitaires/sciences-de-la-nature-sciences-lettres-et-arts/sciences-de-la-nature/",
    degree: "Natural Sciences",
    place: "Cégep de l'Outaouais",
    date: "Aug. 2020 - Sept. 2021",
  };
  export const bytype = {
    one,
    two
  };
  export const education = Object.values(bytype);
  