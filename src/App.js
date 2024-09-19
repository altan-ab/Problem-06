// Her bir butonun üzerine, içerikte yazan eyleme karşılık gelen satır içi/inline stiller ekleyin
export default function ButtonVariants() {
  return (
    <span
      className="wrapper"
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <button
        className="button-create"
        style={{
          color: 'white',
          background: '#50C878',
          margin: '10px',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        Create
      </button>
      <button
        className="button-update"
        style={{
          color: 'white',
          background: '#FF8C00',
          margin: '10px',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        Update
      </button>
      <button
        className="button-delete"
        style={{
          color: 'white',
          background: '#DC143C',
          margin: '10px',
          padding: '10px',
          borderRadius: '8px',
        }}
      >
        Delete
      </button>
    </span>
  )
}
