class Grade{
    constructor(id, name, course, grade){
        this.id = id;
        this.name = name;
        this.course = course;
        this.grade = grade;
    }

    update(name, course, grade){
        this.name = name;
        this.course = course;
        this.grade = grade;
    }
}

module.exports = Grade;