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
      name: 'brand',
      title: 'Brand',
      type: 'string',
      placeholder: 'e.g., Arcchio Lamps, Custom Woodworks',
    }),
    defineField({
      name: 'itemNumber',
      title: 'Item Number / SKU',
      type: 'string',
      placeholder: 'e.g., WA-001, SKU12345',
    }),
    defineField({
      name: 'ean',
      title: 'EAN (European Article Number)',
      type: 'string',
      placeholder: 'e.g., 1234567890123',
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
          { title: 'Ceiling Light', value: 'ceiling-light' },
          { title: 'Wall Light', value: 'wall-light' },
          { title: 'Floor Lamp', value: 'floor-lamp' },
          { title: 'Table Lamp', value: 'table-lamp' },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'color',
      title: 'Color',
      type: 'string',
      placeholder: 'e.g., Natural Wood, White, Black, Oak Finish',
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
      title: 'Dimensions (Free Text)',
      type: 'string',
      placeholder: 'e.g., 12" diameter x 4" height',
    }),
    defineField({
      name: 'structuredDimensions',
      title: 'Structured Dimensions',
      type: 'object',
      fields: [
        defineField({
          name: 'length',
          title: 'Length (cm)',
          type: 'number',
          validation: (rule) => rule.min(0),
        }),
        defineField({
          name: 'width',
          title: 'Width (cm)',
          type: 'number',
          validation: (rule) => rule.min(0),
        }),
        defineField({
          name: 'height',
          title: 'Height (cm)',
          type: 'number',
          validation: (rule) => rule.min(0),
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'netWeight',
      title: 'Net Weight (kg)',
      type: 'number',
      validation: (rule) => rule.min(0),
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
      title: 'Stock Status',
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
      name: 'discount',
      title: 'Discount / Offer',
      type: 'object',
      fields: [
        defineField({
          name: 'percentage',
          title: 'Discount Percentage',
          type: 'number',
          validation: (rule) => rule.min(0).max(100),
        }),
        defineField({
          name: 'description',
          title: 'Offer Description',
          type: 'string',
          placeholder: 'e.g., Holiday Sale, Limited Time Offer',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'technicalSpecs',
      title: 'Technical Specifications',
      type: 'object',
      fields: [
        defineField({
          name: 'lightBulbIncluded',
          title: 'Light Bulb Included',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'numberOfBulbs',
          title: 'Number of Light Bulbs',
          type: 'number',
          validation: (rule) => rule.min(0),
        }),
        defineField({
          name: 'baseType',
          title: 'Base Type',
          type: 'string',
          placeholder: 'e.g., GU10, E27, E14',
        }),
        defineField({
          name: 'wattage',
          title: 'Wattage (watts)',
          type: 'number',
          validation: (rule) => rule.min(0),
        }),
        defineField({
          name: 'integratedLEDs',
          title: 'Integrated LEDs',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'dimmable',
          title: 'Dimmable',
          type: 'boolean',
          initialValue: false,
        }),
        defineField({
          name: 'ipCode',
          title: 'IP Code (Ingress Protection)',
          type: 'string',
          placeholder: 'e.g., IP20, IP44, IP65',
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'manufacturerInfo',
      title: 'Manufacturer Information',
      type: 'object',
      fields: [
        defineField({
          name: 'name',
          title: 'Manufacturer Name',
          type: 'string',
        }),
        defineField({
          name: 'country',
          title: 'Country of Origin',
          type: 'string',
          placeholder: 'e.g., Sri Lanka, Germany, Italy',
        }),
        defineField({
          name: 'notes',
          title: 'Internal Notes',
          type: 'text',
          rows: 2,
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
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