<script setup>
const podcastData = [
    {
        id: 1,
        title: 'The Joe Rogan Experience',
        description: 'A long form, in-depth conversation',
        imgURL: 'https://lovely-flamingo-139.convex.cloud/api/storage/3106b884-548d-4ba0-a179-785901f69806'
    },
    {
        id: 2,
        title: 'The Futur',
        description: 'This is how the news should sound',
        imgURL: 'https://lovely-flamingo-139.convex.cloud/api/storage/16fbf9bd-d800-42bc-ac95-d5a586447bf6'
    },
    {
        id: 3,
        title: 'Waveform',
        description: 'Join Michelle Obama in conversation',
        imgURL: 'https://lovely-flamingo-139.convex.cloud/api/storage/60f0c1d9-f2ac-4a96-9178-f01d78fa3733'
    },
    {
        id: 4,
        title: 'The Tech Talks Daily Podcast',
        description: 'This is how the news should sound',
        imgURL: 'https://lovely-flamingo-139.convex.cloud/api/storage/5ba7ed1b-88b4-4c32-8d71-270f1c502445'
    },
    {
        id: 5,
        title: 'GaryVee Audio Experience',
        description: 'A long form, in-depth conversation',
        imgURL: 'https://lovely-flamingo-139.convex.cloud/api/storage/ca7cb1a6-4919-4b2c-a73e-279a79ac6d23'
    },
    {
        id: 6,
        title: 'Syntax ',
        description: 'Join Michelle Obama in conversation',
        imgURL: 'https://lovely-flamingo-139.convex.cloud/api/storage/b8ea40c7-aafb-401a-9129-73c515a73ab5'
    },
    {
        id: 7,
        title: 'IMPAULSIVE',
        description: 'A long form, in-depth conversation',
        imgURL: 'https://lovely-flamingo-139.convex.cloud/api/storage/8a55d662-fe3f-4bcf-b78b-3b2f3d3def5c'
    },
    {
        id: 8,
        title: 'Ted Tech',
        description: 'This is how the news should sound',
        imgURL: 'https://lovely-flamingo-139.convex.cloud/api/storage/221ee4bd-435f-42c3-8e98-4a001e0d806e'
    }
]
// Does'nt work yet for nuxt 3
import { useConvexQuery } from "@convex-vue/core";
import { api } from "../convex/_generated/api";

const { data, isLoading } = useConvexQuery(api.tasks.get, {});
</script>
<template>
    <h1 class="text-white-1">Trending podcasts</h1>
    <div class="podcast_grid">
        <PodcastCard
            v-for="podcast in podcastData"
            :key="podcast.id"
            :podcastData="podcast"
        />
    </div>
    <div class="text-white-1">
    <!-- Does'nt work yet for nuxt 3 -->
        <ul v-if="!isLoading">
            <li v-for="todo in data">
                {{ todo.text }} {{ todo.isCompleted ? "☑" : "☐" }}
            </li>
        </ul>
        <span v-else> loading... </span>
    </div>
</template>
