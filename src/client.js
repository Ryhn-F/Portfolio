import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = new sanityClient({
  projectId: "d2neoksr",
  dataset: "production",
  apiVersion: "2022-02-01",
  useCdn: true,
  token:
    "skeQpLVKOUVaAGgtvXmE4XmrxgCdMsEeMIYM7zCTe4M0ZfJnJqecbPOs9Fg9TwrEtVvWo9wjtnbeM9Dap7i5C6uVJMSVdsxQf9k5GoU6Ze0gFtKxsHvdOVI7yPkOFMn9iOxIyxvwqunC0qh0whARHfxBNUNk5rJBvnFuTLNRJ0iLc0kP9Xj0",
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
