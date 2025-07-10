import { defineField, defineType } from 'sanity'

export const productType = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.required().min(0),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Functional', value: 'functional' },
          { title: 'Decorative', value: 'decorative' },
          { title: 'Furniture', value: 'furniture' },
          { title: 'Sculptures', value: 'sculptures' },
          { title: 'Kitchen', value: 'kitchen' },
          { title: 'Home Decor', value: 'home-decor' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'featured_image',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'gallery',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true,
              },
            }),
            defineField({
              name: 'alt',
              title: 'Alt Text',
              type: 'string',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'dimensions',
      title: 'Dimensions',
      type: 'string',
      placeholder: 'e.g., 12" diameter x 4" height',
    }),
    defineField({
      name: 'material',
      title: 'Material',
      type: 'string',
      placeholder: 'e.g., White Oak, Mahogany, Pine',
    }),
    defineField({
      name: 'available',
      title: 'Available for Purchase',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'in-stock' },
          { title: 'Out of Stock', value: 'out-of-stock' },
          { title: 'Made to Order', value: 'made-to-order' },
          { title: 'Coming Soon', value: 'coming-soon' },
        ],
      },
      initialValue: 'in-stock',
    }),
    defineField({
      name: 'content',
      title: 'Detailed Description',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'seo',
      title: 'SEO',
      type: 'object',
      fields: [
        defineField({
          name: 'title',
          title: 'SEO Title',
          type: 'string',
          validation: (rule) => rule.max(60),
        }),
        defineField({
          name: 'description',
          title: 'SEO Description',
          type: 'text',
          rows: 2,
          validation: (rule) => rule.max(160),
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'featured_image',
      subtitle: 'category',
      price: 'price',
    },
    prepare(selection) {
      const { title, media, subtitle, price } = selection
      return {
        title,
        media,
        subtitle: `${subtitle} - $${price}`,
      }
    },
  },
})