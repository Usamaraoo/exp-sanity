import { defineConfig } from "sanity";
import { deskTool } from 'sanity/desk';
import {schemaTypes} from './sanity/schemas/index'

export const config = defineConfig({
    projectId: "3mjl50nv",
    dataset: "production",
    title: "test",
    apiVersion: '2023-03-04',
    basePath: '/admin',
    plugins: [deskTool()],
    schema: { types: schemaTypes }
})