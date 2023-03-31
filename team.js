// Open modal with full details of a team member
function openModal(memberId) {
  // Get the member details from an API or database based on the memberId
  // Here, I'm just using some sample data for demonstration purposes
  const memberDetails = {
    name: 'Member 1',
    image: 'member1-image.jpg',
    bio: 'Full details of Member 1'
  };

  // Set the member details in the modal content
  const modalContent = document.getElementById('member-details');
  modalContent.innerHTML = `
    <img src="${memberDetails.image}" alt="${memberDetails.name}">
    <h3>${memberDetails.name}</h3>
    <p>${memberDetails.bio}</p>
  `;

   
  const modal = document.getElementById('member-modal');
  modal.style.display = 'block';
}

// Close the modal
function closeModal() {
  const modal = document.getElementById('member-modal');
  modal.style.display = 'none';
}
