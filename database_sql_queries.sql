
-- School Table: This table stores general information about the school.
CREATE TABLE School (
    school_id INT PRIMARY KEY AUTO_INCREMENT,
    school_name VARCHAR(100) NOT NULL,
    location VARCHAR(100) NOT NULL,
    -- Add other relevant fields like address, contact details, etc.
);


-- Class Table: This table stores information about each class.
CREATE TABLE Class (
    class_id INT PRIMARY KEY AUTO_INCREMENT,
    class_name VARCHAR(10) NOT NULL,
    -- Add other relevant fields like class teacher, etc.
);

-- Section Table: This table stores information about each section within a class.
CREATE TABLE Section (
    sectionId INT PRIMARY KEY,
    sectionName VARCHAR(10) NOT NULL,
    classId INT NOT NULL,
    FOREIGN KEY (classId) REFERENCES Class(classId),
   
);


CREATE TABLE Student (
    studentId INT PRIMARY KEY,
    rollNo INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    classId INT NOT NULL,
    sectionId INT NOT NULL,
    FOREIGN KEY (classId) REFERENCES Class(classId),
    FOREIGN KEY (sectionId) REFERENCES Section(sectionId)
);


-- Teacher Table: This table stores information about teachers.
CREATE TABLE Teacher (
    teacherId INT PRIMARY KEY ,
    name VARCHAR(100) NOT NULL,
);


-- Teacher_Section Table: This table associates teachers with the sections they teach.
CREATE TABLE TeacherSection (
    teacherSectionId INT PRIMARY KEY ,
    teacherId INT NOT NULL,
    sectionId INT NOT NULL,
    FOREIGN KEY (teacherId) REFERENCES Teacher(teacherId),
    FOREIGN KEY (sectionId) REFERENCES Section(sectionId)
);

-- Attendance Table: This table now includes a field for subject_id to associate attendance records with subjects.
CREATE TABLE Attendance (
    attendanceId INT PRIMARY KEY,
    studentId INT NOT NULL,
    subjectId INT NOT NULL,
    date DATE NOT NULL,
    status ENUM('Present', 'Absent') NOT NULL,
    FOREIGN KEY (studentId) REFERENCES Student(studentId),
    FOREIGN KEY (subjectId) REFERENCES Subject(subjectId)
);



-- Subject Table: This table stores information about subjects.
CREATE TABLE Subject (
    subjectId INT PRIMARY KEY ,
    subjectName VARCHAR(100) NOT NULL
  
);

-- Class_Subject Table: This table associates subjects with classes.
CREATE TABLE ClassSubject (
    classSubjectId INT PRIMARY KEY ,
    classId INT NOT NULL,
    subjectId INT NOT NULL,
    FOREIGN KEY (classId) REFERENCES Class(classId),
    FOREIGN KEY (subjectId) REFERENCES Subject(subjectId)
);






