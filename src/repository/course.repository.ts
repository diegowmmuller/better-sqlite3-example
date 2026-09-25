import db from "../database.js";
import type { Course } from "../types/Courses.js";

export const createCourse = (course: Course) => {
  const statement = db.prepare(`
        INSERT INTO courses (name) VALUES (?)
        `);
  return statement.run(course.name);
};

export const updateCourse = (course: Course) => {
  const statement = db.prepare(`
        UPDATE users
        SET name = ?
        WHERE id = ?
        `);

  return statement.run(course.name, course.id);
};

export const getCourses = () => {
  const statement = db.prepare(`
        SELECT * FROM courses
        `);

  return statement.all();
};

export const getCourse = (id: number) => {
  const statement = db.prepare(`
        SELECT * FROM courses
        WHERE id = ?
        `);

  return statement.get(id);
};

export const deleteCourse = (id: number) => {
  const statement = db.prepare(`
        DELETE FROM courses
        WHERE id = ?
        `);
  return statement.run(id);
};
