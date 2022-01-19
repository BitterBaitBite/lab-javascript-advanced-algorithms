const queueUL = document.querySelector('#queue-list');
const queueInput = document.querySelector('.queue-input');
const warningTopQueue = document.querySelector('#queue-container .warning-top');
const warningBottomQueue = document.querySelector(
  '#queue-container .warning-bottom'
);
const addQueue = document.querySelector('.btn-add-queue');
const dequeue = document.querySelector('.btn-take-dequeue');

const queue = new Queue();

const clearQueueInput = () => {
  queueInput.value = '';
  warningBottomQueue.style.display = 'none';
  warningBottomQueue.textContent = '';
  warningTopQueue.style.display = 'none';
  warningTopQueue.textContent = '';
};

const generateListQueue = () => {
  let visualQueue = queueUL.querySelectorAll('li');

  for (let i = queue.display().length - 1; i >= 0; i--) {
    visualQueue[i].classList.replace('inactive', 'active');
    visualQueue[i].textContent = queue.display()[i];
  }

  for (let i = queue.display().length; i < queue.MAX_SIZE; i++) {
    visualQueue[i].classList.replace('active', 'inactive');
    visualQueue[i].textContent = '';
  }
};

generateListQueue();

const generateWarningQueue = (type) => {
  if (type === 'underflow') {
    // alert('QUEUE UNDERFLOW!');
    warningBottomQueue.style.display = 'block';
    warningBottomQueue.textContent = 'QUEUE UNDERFLOW';
  } else if (type === 'overflow') {
    // alert('QUEUE OVERFLOW!');
    warningTopQueue.style.display = 'block';
    warningTopQueue.textContent = 'QUEUE OVERFLOW';
  }
};

const addToQueue = () => {
  try {
    queue.enqueue(queueInput.value);
    clearQueueInput();
    generateListQueue();
  } catch (error) {
    generateWarningQueue('overflow');
  }
};

const removeFromQueue = () => {
  try {
    queue.dequeue();
    clearQueueInput();
    generateListQueue();
  } catch (error) {
    generateWarningQueue('underflow');
  }
};

addQueue.addEventListener('click', addToQueue);
dequeue.addEventListener('click', removeFromQueue);
