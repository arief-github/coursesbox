import { ComponentStoryObj, ComponentMeta } from '@storybook/react';
import { Tile } from './Tile';
import { screen } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
    title: "Content/Tile",
    component: Tile
} as ComponentMeta<typeof Tile>;

export const BasicTile:ComponentStoryObj<typeof Tile> = {
    play: async ({ args }) => {
        await expect(screen.getByRole("heading")).toBeInTheDocument();
    },
    args: {
        header: "Course With Next",
        children: `
        Lorem ipsum dolor sit amet consectetur, a
        dipisicing elit. Minus dolor blanditiis 
        pariatur cum atque provident dolores veritatis ex 
        repudiandae aliquam.
        `
    }
}