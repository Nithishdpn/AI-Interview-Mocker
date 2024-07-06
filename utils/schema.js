import { pgTable, serial, text, varchar, boolean } from "drizzle-orm/pg-core";


export const MockInterview=pgTable('mockInterview',{
    id:serial('id').primaryKey(),
    jsonMockResp:text('jsonMockResp').notNull(),
    jobPosition:varchar('jobPosition').notNull(),
    jobDesc:varchar('jobDesc').notNull(),
    jobExperience:varchar('jobExperience').notNull(),
    createdBy:varchar('createdBy').notNull(),
    createdAt:varchar('createdAt'),
    mockId:varchar('mockId').notNull()
})

export const UserAnswer=pgTable('userAnswer',{
    id:serial('id').primaryKey(),
    mockIdRef:varchar('mockId').notNull(),
    question:varchar('question').notNull(),
    correctAns:text('correctAns'),
    userAns:text('userAns'),
    feedback:text('feedback'),
    rating:varchar('rating'),
    userEmail:varchar('userEmail'),
    createdAt:varchar('createdAt'),

})


export const User = pgTable('user', {
    id: serial('id').primaryKey(),
    email: varchar('email').notNull(),
    password: varchar('password').notNull(),
    isSubscribed: boolean('isSubscribed').notNull().default(false), // Directly use `boolean`
    firstName: varchar('firstName').notNull(),
    lastName: varchar('lastName').notNull(),
    createdAt: varchar('createdAt').notNull()

})