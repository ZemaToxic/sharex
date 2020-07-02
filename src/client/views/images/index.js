import React from 'react'
import { connect } from 'react-redux'

import { fetchImages } from '../../redux/operations'

import { SEO } from '../../components/seo'
import { FileLoader } from '../../components/file-loader'
import { DropDown } from './DropDown'

import './index.scss'

class Images extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      columns: 4
    }

    this.setColumns = this.setColumns.bind(this)
  }

  setColumns (columns) {
    this.setState({
      columns
    })
  }

  render () {
    return (
      <div className="images">
      <DropDown title='Image Layout' onChange={this.setColumns}/>
        <SEO title="Images" />
        <FileLoader
          className="image-files"
          files={images}
          loader={fetchImages}
          columns={this.state.columns}
          display={(image, key) => (
            <div className="image" key={key}>
              <a href={image.name.split('.')[0]} target="_blank" >
                <img src={image.name} />
              </a>
            </div>
          )}
        />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    images: state.images
  }
}

export default connect(mapStateToProps)(Images)
