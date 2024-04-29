# ChirpHub

ChirpHub is a full-stack application designed to manage smart birdhouses deployed worldwide to monitor bird and egg residency.

This repository contains the frontend application, built with Vue.js, using Vue Router for navigation, Tailwind for styling, vue-chartjs/chartjs for styles and Pinia for state management.

You can find the backend here: https://github.com/senadev42/chirphub-backend.git

## Getting Started

1. Clone the repository:

```shell
git clone https://github.com/senadev42/chirphub-frontend.git
```

2. Navigate to the project directory.

```shell
cd chirphub-frontend
```

3. Install dependencies.

```shell
npm install
```

4. Set up environment variables.

Create a .env file based on the .env.example file and provide necessary configurations like where the backend is hosted.

5. Run the application.

```shell
npm run dev

```

## Retrospective

I started with the frontend first since I'm less familiar with vue compare to nest and wanted to get that out of the way.

I tried to do as much configuration and setup out of the get go here by setting up paths, routing, the color and font pallette with tailwind config and so on, as opposed to on the backend where I added stuff in when I needed it. I tackled the pages here in the order they were presented on the figma. I used the shape of the api to create a mock json which I initally used directly, but eventually set up a small json server to host it so I could set up my api/store infrastructure.

In general I tried to stick to best practices with vue as much as possible. Vue recommends having a flat heirachy with all components in one folder and using names to group them. Pagination is where the first cross roads appeared between using a library and implementing it myself. I think if I'd just used a library it would have been easier to tear it down when I noticed later too late that it was entirely client side pagination. I kept it since the payloads are small that fetching the full dataset and doing cosmetic pagination is fine but if this scaled I would have replaced it with server side pagination.

For the chart itself I used chartjs (with vue-chartjs as a wrapper) and it was somewhat finnicky (with the responsiveness, and filler plugins) but it got the job done. There's also some unexpected but not unwanted behavior that emerges on the chart since it shares the same pagination with the logs in that it also. I considered removing it but that's what it looks like on the figma so I let it be. Same assumption for the birdhouse list screen. In a real enviroment these would be clarified and iterated on over time but for this I tried to stick to the designs as closely as possible.

I stopped at that point and moved on to working on the backend and when it came time to integrate, other than renaming a few things, it was fairly straightfoward since the frontend was already built around the json web server and it was a matter of switching.
