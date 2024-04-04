
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
    section_id INT PRIMARY KEY AUTO_INCREMENT,
    section_name VARCHAR(10) NOT NULL,
    class_id INT NOT NULL,
    FOREIGN KEY (class_id) REFERENCES Class(class_id),
    -- Add other relevant fields if needed.
);


-- Student Table: This table stores information about students.
CREATE TABLE Student (
    student_id INT PRIMARY KEY AUTO_INCREMENT,
    roll_number INT NOT NULL,
    name VARCHAR(100) NOT NULL,
    class_id INT NOT NULL,
    section_id INT NOT NULL,
    -- Add other relevant fields like address, date of birth, etc.
    FOREIGN KEY (class_id) REFERENCES Class(class_id),
    FOREIGN KEY (section_id) REFERENCES Section(section_id)
);


-- Teacher Table: This table stores information about teachers.
CREATE TABLE Teacher (
    teacher_id INT PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    -- Add other relevant fields like address, contact details, etc.
);


-- Teacher_Section Table: This table associates teachers with the sections they teach.
CREATE TABLE Teacher_Section (
    teacher_section_id INT PRIMARY KEY AUTO_INCREMENT,
    teacher_id INT NOT NULL,
    section_id INT NOT NULL,
    FOREIGN KEY (teacher_id) REFERENCES Teacher(teacher_id),
    FOREIGN KEY (section_id) REFERENCES Section(section_id)
);

-- Attendance Table: This table now includes a field for subject_id to associate attendance records with subjects.
CREATE TABLE Attendance (
    attendance_id INT PRIMARY KEY AUTO_INCREMENT,
    student_id INT NOT NULL,
    subject_id INT NOT NULL,
    date DATE NOT NULL,
    status ENUM('Present', 'Absent') NOT NULL,
    FOREIGN KEY (student_id) REFERENCES Student(student_id),
    FOREIGN KEY (subject_id) REFERENCES Subject(subject_id)
);



-- Subject Table: This table stores information about subjects.
CREATE TABLE Subject (
    subject_id INT PRIMARY KEY AUTO_INCREMENT,
    subject_name VARCHAR(100) NOT NULL
    -- Add other relevant fields if needed.
);

-- Class_Subject Table: This table associates subjects with classes.
CREATE TABLE Class_Subject (
    class_subject_id INT PRIMARY KEY AUTO_INCREMENT,
    class_id INT NOT NULL,
    subject_id INT NOT NULL,
    FOREIGN KEY (class_id) REFERENCES Class(class_id),
    FOREIGN KEY (subject_id) REFERENCES Subject(subject_id)
);



