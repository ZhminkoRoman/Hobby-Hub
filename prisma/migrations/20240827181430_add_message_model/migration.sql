-- CreateTable
CREATE TABLE "accounts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "provider_account_id" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT
);

-- CreateTable
CREATE TABLE "sessions" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "session_token" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT,
    "email" TEXT,
    "email_verified" DATETIME,
    "image" TEXT
);

-- CreateTable
CREATE TABLE "Event" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "authorId" TEXT NOT NULL,
    "eventImage" TEXT,
    "eventVideo" TEXT,
    "updatedAt" DATETIME NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Message" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "content" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "HobbyCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "HobbyType" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "slug" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "hobbyCategoryId" TEXT,
    "hobbyCategoryTitle" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UsersHobby" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "hobbyTypeTitle" TEXT NOT NULL,
    "hobbyTypeId" TEXT,
    "userId" TEXT,
    "level" INTEGER NOT NULL DEFAULT 0,
    "rewards" TEXT,
    "achievements" TEXT,
    "cources" TEXT,
    "challenges" TEXT,
    "ambition" TEXT
);

-- CreateTable
CREATE TABLE "verificationtokens" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" DATETIME NOT NULL
);

-- CreateIndex
CREATE INDEX "accounts_user_id_idx" ON "accounts"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "accounts_provider_provider_account_id_key" ON "accounts"("provider", "provider_account_id");

-- CreateIndex
CREATE UNIQUE INDEX "sessions_session_token_key" ON "sessions"("session_token");

-- CreateIndex
CREATE INDEX "sessions_user_id_idx" ON "sessions"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Event_slug_key" ON "Event"("slug");

-- CreateIndex
CREATE INDEX "Event_slug_idx" ON "Event"("slug");

-- CreateIndex
CREATE INDEX "Event_authorId_idx" ON "Event"("authorId");

-- CreateIndex
CREATE UNIQUE INDEX "HobbyCategory_slug_key" ON "HobbyCategory"("slug");

-- CreateIndex
CREATE INDEX "HobbyCategory_slug_idx" ON "HobbyCategory"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "HobbyCategory_id_slug_key" ON "HobbyCategory"("id", "slug");

-- CreateIndex
CREATE UNIQUE INDEX "HobbyType_slug_key" ON "HobbyType"("slug");

-- CreateIndex
CREATE INDEX "HobbyType_slug_idx" ON "HobbyType"("slug");

-- CreateIndex
CREATE INDEX "HobbyType_hobbyCategoryId_hobbyCategoryTitle_idx" ON "HobbyType"("hobbyCategoryId", "hobbyCategoryTitle");

-- CreateIndex
CREATE UNIQUE INDEX "HobbyType_id_slug_key" ON "HobbyType"("id", "slug");

-- CreateIndex
CREATE INDEX "UsersHobby_hobbyTypeId_hobbyTypeTitle_idx" ON "UsersHobby"("hobbyTypeId", "hobbyTypeTitle");

-- CreateIndex
CREATE INDEX "UsersHobby_userId_idx" ON "UsersHobby"("userId");

-- CreateIndex
CREATE UNIQUE INDEX "verificationtokens_identifier_token_key" ON "verificationtokens"("identifier", "token");
