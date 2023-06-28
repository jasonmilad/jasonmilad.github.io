export interface Template {
  link: string;
  type: string;
  title: string;
};
const one: Template = {
  link: "mailto:jmilad@uwaterloo.ca",
  type: "Email",
  title: "jmilad@uwaterloo.ca",
};

const two: Template = {
  link: "https://www.linkedin.com/in/jasonmilad/",
  type: "LinkedIn",
  title: "Jason Milad"
};

const three: Template = {
  link: "https://github.com/jasonmilad",
  type: "GitHub",
  title: "jmilad"
};

export const bytype = {
  one,
  two,
  three
};
export const contact = Object.values(bytype);
