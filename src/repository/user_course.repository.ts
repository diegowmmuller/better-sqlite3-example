import db from "../database.js";

export const addCourseToUser = (userId: number, courseId: number) => {
  const statement = db.prepare(`
        INSERT INTO user_courses (user_id, course_id)
        VALUES (?, ?)
    `);

  return statement.run(userId, courseId);
};

export const getCoursesByUser = (userId: number) => {
  const statement = db.prepare(`
        SELECT courses.*
        FROM courses
        INNER JOIN user_courses
            ON courses.id = user_courses.course_id
        WHERE user_courses.user_id = ?
    `);

  return statement.all(userId);
};

export const getUsersByCourse = (courseId: number) => {
  const statement = db.prepare(`
        SELECT users.*
        FROM users
        INNER JOIN user_courses
            ON users.id = user_courses.user_id
        WHERE user_courses.course_id = ?
    `);

  return statement.all(courseId);
};

export const getUserCourse = (userId: number, courseId: number) => {
  const statement = db.prepare(`
        SELECT *
        FROM user_courses
        WHERE user_id = ?
          AND course_id = ?
    `);

  return statement.get(userId, courseId);
};

export const removeCourseFromUser = (userId: number, courseId: number) => {
  const statement = db.prepare(`
        DELETE FROM user_courses
        WHERE user_id = ?
          AND course_id = ?
    `);

  return statement.run(userId, courseId);
};
