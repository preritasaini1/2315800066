# Stage 1 - API Design

## Endpoints

### Get Notifications
```http
GET /api/notifications
```

### Create Notification
```http
POST /api/notifications
```

### Mark as Read
```http
PUT /api/notifications/:id/read
```

### Real-Time Updates
Use WebSockets or SSE to deliver notifications instantly.

---

# Stage 2 - Database Design

## Database
PostgreSQL

## Notifications Table

```sql
CREATE TABLE notifications (
    id UUID PRIMARY KEY,
    studentID INT,
    notificationType VARCHAR(20),
    message TEXT,
    isRead BOOLEAN,
    createdAt TIMESTAMP
);
```

## Optimization
- Indexing
- Pagination
- Archiving old records

---

# Stage 3 - Query Optimization

## Query

```sql
SELECT *
FROM notifications
WHERE studentID = 1042
AND isRead = false
ORDER BY createdAt DESC;
```

## Index

```sql
CREATE INDEX idx_notification
ON notifications(studentID, isRead, createdAt DESC);
```

Benefits:
- Faster search
- Faster sorting
- Reduced query time

---

# Stage 4 - Performance Improvements

### Caching
Use Redis to reduce database load.

### Pagination

```http
GET /api/notifications?page=1&limit=20
```

### Read Replicas
Distribute read traffic across multiple database servers.

### Archiving
Move old notifications to archive storage.

---

# Stage 5 - Notification Delivery Design

## Improved Flow

1. Save notification in database.
2. Push task to message queue.
3. Worker processes send notifications.
4. Retry failed deliveries.

## Benefits

- Faster processing
- Reliable delivery
- Scalable for large numbers of users
- Supports retry mechanisms