// schema.js

import { pgTable, serial, text, varchar, numeric, timestamp } from "drizzle-orm/pg-core";

export const MockInterview = pgTable('mockInterview', {
    id: serial('id').primaryKey(),
    jsonMockResp: text('jsonMockResp').notNull(),
    jobPosition: varchar('jobPosition').notNull(),
    jobDesc: varchar('jobDesc').notNull(),
    jobExperience: varchar('jobExperience').notNull(),
    createdBy: varchar('createdBy').notNull(),
    createdAt: timestamp('createdAt').notNull(),
    mockId: varchar('mockId').notNull()
})

export const UserAnswer = pgTable('userAnswer', {
    id: serial('id').primaryKey(),
    mockIdRef: varchar('mockId').notNull(),
    question: varchar('question').notNull(),
    correctAns: text('correctAns'),
    userAns: text('userAns'),
    feedback: text('feedback'),
    rating: varchar('rating'),
    userEmail: varchar('userEmail'),
    createdAt: timestamp('createdAt').notNull(),
})

 
export const Subscription = pgTable('subscription', {
    id: serial('id').primaryKey().notNull(),
    userId: varchar('userId').notNull(),  // Assuming userId references the 'user' table id
    planName: varchar('planName').notNull(),
    cost: numeric('cost', { precision: 10, scale: 2 }).notNull(),  // Adjust precision and scale as needed
    startDate: timestamp('startDate').notNull(),
    endDate: timestamp('endDate').notNull(),
    // Add other subscription-related fields as needed
})

