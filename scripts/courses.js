// Sample course data
const coursesData = [
    {
      id: 1,
      title: 'Learn React',
      instructor: 'John Doe',
      price: 99.99,
      image: 'https://via.placeholder.com/300',
      description:
        'Learn the basics of React, a popular JavaScript library for building user interfaces.',
    },
    {
      id: 2,
      title: 'Master JavaScript',
      instructor: 'Jane Smith',
      price: 79.99,
      image: 'https://via.placeholder.com/300',
      description:
        'Become an expert in JavaScript, the most widely used programming language for web development.',
    },
    {
      id: 3,
      title: 'Introduction to Python',
      instructor: 'Alice Johnson',
      price: 59.99,
      image: 'https://via.placeholder.com/300',
      description:
        'Get started with Python, a versatile and beginner-friendly programming language.',
    },
    {
      id: 4,
      title: 'Web Development Bootcamp',
      instructor: 'Michael Brown',
      price: 129.99,
      image: 'https://via.placeholder.com/300',
      description:
        'Join our bootcamp to learn web development from scratch, including HTML, CSS, and JavaScript.',
    },
    {
      id: 5,
      title: 'Advanced CSS Techniques',
      instructor: 'Lisa White',
      price: 49.99,
      image: 'https://via.placeholder.com/300',
      description:
        'Take your CSS skills to the next level with advanced techniques and modern CSS frameworks.',
    },
    {
      id: 6,
      title: 'Data Science with Python',
      instructor: 'David Green',
      price: 119.99,
      image: 'https://via.placeholder.com/300',
      description:
        'Explore the world of data science with Python, covering data analysis, visualization, and machine learning.',
    },
    {
      id: 7,
      title: 'Full Stack Development',
      instructor: 'Emily Johnson',
      price: 149.99,
      image: 'https://via.placeholder.com/300',
      description:
        'Become a full stack developer and master both front-end and back-end technologies.',
    },
    {
      id: 8,
      title: 'AI and Machine Learning',
      instructor: 'Robert Brown',
      price: 199.99,
      image: 'https://via.placeholder.com/300',
      description:
        'Dive into AI and Machine Learning with comprehensive courses covering algorithms and practical applications.',
    },
    {
      id: 9,
      title: 'Cloud Computing with AWS',
      instructor: 'Maria Garcia',
      price: 109.99,
      image: 'https://via.placeholder.com/300',
      description:
        'Learn how to use AWS for cloud computing, including storage, databases, and networking.',
    },
    // Add more courses as needed
  ];
  
  // Render course list on the courses page
  const courseList = document.getElementById('courseList');
  
  if (courseList) {
    coursesData.forEach((course) => {
      const courseCard = document.createElement('div');
      courseCard.className = 'course-card';
  
      courseCard.innerHTML = `
        <img src="${course.image}" alt="${course.title}" class="course-image" />
        <div class="course-info">
          <h3>${course.title}</h3>
          <p>Instructor: ${course.instructor}</p>
          <p class="price">$${course.price}</p>
          <a href="course.html?id=${course.id}" class="course-details-link">View Details</a>
        </div>
      `;
  
      courseList.appendChild(courseCard);
    });
  }
  
  // Handle course detail page
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('id');
  
  if (courseId) {
    const course = coursesData.find((c) => c.id === parseInt(courseId));
  
    if (course) {
      document.getElementById('courseTitle').innerText = course.title;
      document.getElementById('courseImage').src = course.image;
      document.getElementById(
        'courseInstructor'
      ).innerText = `Instructor: ${course.instructor}`;
      document.getElementById(
        'courseDescription'
      ).innerText = `Description: ${course.description}`;
      document.getElementById(
        'coursePrice'
      ).innerText = `Price: $${course.price}`;
    }
  }
  