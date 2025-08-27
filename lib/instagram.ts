// Instagram Integration for @cypressmillworkscc
// Mike Switzer's European Cabinet Portfolio

interface InstagramPost {
  id: string
  media_url: string
  permalink: string
  caption: string
  timestamp: string
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM'
  thumbnail_url?: string
}

interface ProcessedPortfolioItem {
  id: string
  title: string
  description: string
  imageUrl: string
  location: string
  projectType: 'kitchen' | 'bathroom' | 'built_in' | 'specialty'
  cabinetStyle: string
  isFrameless: boolean
  materials?: string
  instagramUrl: string
  instagramId: string
}

export class InstagramPortfolioService {
  private accessToken: string
  private baseUrl = 'https://graph.instagram.com'

  constructor(accessToken: string) {
    this.accessToken = accessToken
  }

  /**
   * Fetch posts from @cypressmillworkscc Instagram account
   */
  async fetchInstagramPosts(): Promise<InstagramPost[]> {
    try {
      const url = `${this.baseUrl}/me/media?fields=id,media_url,permalink,caption,timestamp,media_type,thumbnail_url&access_token=${this.accessToken}`
      
      const response = await fetch(url)
      if (!response.ok) {
        throw new Error(`Instagram API error: ${response.status}`)
      }

      const data = await response.json()
      return data.data || []
    } catch (error) {
      console.error('Failed to fetch Instagram posts:', error)
      throw new Error('Instagram sync failed')
    }
  }

  /**
   * Process Instagram posts into portfolio items
   * Focus on European cabinet projects
   */
  processPostsForPortfolio(posts: InstagramPost[]): ProcessedPortfolioItem[] {
    return posts
      .filter(post => this.isEuropeanCabinetPost(post.caption))
      .map(post => ({
        id: `instagram-${post.id}`,
        title: this.generateProjectTitle(post.caption),
        description: this.extractProjectDescription(post.caption),
        imageUrl: post.media_type === 'VIDEO' ? post.thumbnail_url || post.media_url : post.media_url,
        location: this.parseLocation(post.caption) || 'Central Texas',
        projectType: this.parseCabinetType(post.caption),
        cabinetStyle: 'European Frameless', // Mike Switzer's specialty
        isFrameless: true, // All CMCC cabinets are frameless
        materials: this.extractMaterials(post.caption),
        instagramUrl: post.permalink,
        instagramId: post.id
      }))
  }

  /**
   * Determine if post is about European cabinet work
   */
  private isEuropeanCabinetPost(caption: string): boolean {
    const cabinetKeywords = [
      'cabinet', 'kitchen', 'bathroom', 'vanity', 'built-in', 'storage',
      'frameless', 'european', 'custom', 'millwork', 'woodwork'
    ]

    const lowerCaption = caption.toLowerCase()
    return cabinetKeywords.some(keyword => lowerCaption.includes(keyword))
  }

  /**
   * Generate project title from Instagram caption
   */
  private generateProjectTitle(caption: string): string {
    // Look for project-specific patterns
    const titlePatterns = [
      /kitchen.*remodel/i,
      /custom.*cabinet/i,
      /european.*frameless/i,
      /master.*bath/i,
      /built.*in/i,
      /lakeway.*project/i,
      /austin.*kitchen/i,
      /spicewood.*cabinet/i
    ]

    for (const pattern of titlePatterns) {
      const match = caption.match(pattern)
      if (match) {
        return this.titleCase(match[0])
      }
    }

    // Default titles based on project type
    const projectType = this.parseCabinetType(caption)
    const location = this.parseLocation(caption)

    switch (projectType) {
      case 'kitchen':
        return location ? `${location} European Kitchen` : 'European Frameless Kitchen'
      case 'bathroom':
        return location ? `${location} Master Bath` : 'European Bathroom Vanity'
      case 'built_in':
        return location ? `${location} Built-In Storage` : 'Custom Built-In Cabinetry'
      default:
        return 'European Cabinet Project'
    }
  }

  /**
   * Extract project description from caption
   */
  private extractProjectDescription(caption: string): string {
    // Remove hashtags and mentions
    let description = caption.replace(/#\w+/g, '').replace(/@\w+/g, '').trim()
    
    // Take first sentence or up to 150 characters
    const sentences = description.split('.').filter(s => s.trim().length > 0)
    if (sentences.length > 0 && sentences[0].length < 150) {
      return sentences[0].trim() + '.'
    }

    return description.substring(0, 150).trim() + (description.length > 150 ? '...' : '')
  }

  /**
   * Parse location from Instagram caption
   */
  private parseLocation(caption: string): string | null {
    // Texas locations in Mike Switzer's service area
    const locations = [
      'spicewood', 'lakeway', 'austin', 'bee cave', 'dripping springs',
      'cedar park', 'round rock', 'georgetown', 'leander', 'lago vista',
      'point venture', 'briarcliff', 'volente', 'jonestown'
    ]

    const lowerCaption = caption.toLowerCase()
    
    for (const location of locations) {
      if (lowerCaption.includes(location)) {
        return this.titleCase(location)
      }
    }

    // Check for Texas mentions
    if (lowerCaption.includes('texas') || lowerCaption.includes('tx')) {
      return 'Central Texas'
    }

    return null
  }

  /**
   * Determine cabinet project type from caption
   */
  private parseCabinetType(caption: string): 'kitchen' | 'bathroom' | 'built_in' | 'specialty' {
    const lowerCaption = caption.toLowerCase()

    // Kitchen indicators
    const kitchenTerms = ['kitchen', 'island', 'pantry', 'cooking', 'dining']
    if (kitchenTerms.some(term => lowerCaption.includes(term))) {
      return 'kitchen'
    }

    // Bathroom indicators
    const bathroomTerms = ['bathroom', 'vanity', 'bath', 'powder room', 'master bath']
    if (bathroomTerms.some(term => lowerCaption.includes(term))) {
      return 'bathroom'
    }

    // Built-in indicators
    const builtInTerms = ['built-in', 'built in', 'entertainment', 'office', 'study', 'library', 'mudroom']
    if (builtInTerms.some(term => lowerCaption.includes(term))) {
      return 'built_in'
    }

    // Default to kitchen (Mike's most common project type)
    return 'kitchen'
  }

  /**
   * Extract materials mentioned in caption
   */
  private extractMaterials(caption: string): string | undefined {
    const materials = [
      'oak', 'maple', 'cherry', 'walnut', 'hickory', 'alder', 'pine',
      'white oak', 'red oak', 'quarter sawn', 'rift sawn',
      'painted', 'stained', 'natural', 'oil finish', 'lacquer'
    ]

    const lowerCaption = caption.toLowerCase()
    const foundMaterials = materials.filter(material => 
      lowerCaption.includes(material.toLowerCase())
    )

    if (foundMaterials.length > 0) {
      return foundMaterials.map(m => this.titleCase(m)).join(', ')
    }

    return undefined
  }

  /**
   * Helper: Convert string to title case
   */
  private titleCase(str: string): string {
    return str.replace(/\w\S*/g, (txt) => 
      txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
    )
  }

  /**
   * Get Instagram post engagement metrics (if available)
   */
  async getPostMetrics(postId: string): Promise<any> {
    try {
      const url = `${this.baseUrl}/${postId}?fields=like_count,comments_count&access_token=${this.accessToken}`
      const response = await fetch(url)
      
      if (response.ok) {
        return await response.json()
      }
    } catch (error) {
      console.error('Failed to fetch post metrics:', error)
    }
    
    return null
  }

  /**
   * Validate Instagram access token
   */
  async validateToken(): Promise<boolean> {
    try {
      const url = `${this.baseUrl}/me?access_token=${this.accessToken}`
      const response = await fetch(url)
      return response.ok
    } catch (error) {
      console.error('Instagram token validation failed:', error)
      return false
    }
  }
}

/**
 * Helper function to sync Instagram portfolio
 * Used in API routes and scheduled tasks
 */
export async function syncInstagramPortfolio(): Promise<{
  success: boolean
  processed: number
  errors?: string[]
}> {
  const accessToken = process.env.INSTAGRAM_ACCESS_TOKEN

  if (!accessToken) {
    return {
      success: false,
      processed: 0,
      errors: ['Instagram access token not configured']
    }
  }

  try {
    const service = new InstagramPortfolioService(accessToken)
    
    // Validate token first
    const isValid = await service.validateToken()
    if (!isValid) {
      return {
        success: false,
        processed: 0,
        errors: ['Invalid Instagram access token']
      }
    }

    // Fetch and process posts
    const posts = await service.fetchInstagramPosts()
    const portfolioItems = service.processPostsForPortfolio(posts)

    // Here you would save to database
    // For now, just return the count
    console.log(`Processed ${portfolioItems.length} European cabinet projects from @cypressmillworkscc`)

    return {
      success: true,
      processed: portfolioItems.length
    }

  } catch (error) {
    console.error('Instagram sync failed:', error)
    return {
      success: false,
      processed: 0,
      errors: [error instanceof Error ? error.message : 'Unknown error']
    }
  }
}

/**
 * Mock data for development when Instagram API is not available
 */
export const mockPortfolioData: ProcessedPortfolioItem[] = [
  {
    id: 'mock-1',
    title: 'Lakeway European Kitchen',
    description: 'Stunning European frameless kitchen featuring quarter-sawn white oak with hand-rubbed natural finish. Custom island with waterfall edge.',
    imageUrl: '/images/portfolio/lakeway-kitchen-1.jpg',
    location: 'Lakeway',
    projectType: 'kitchen',
    cabinetStyle: 'European Frameless',
    isFrameless: true,
    materials: 'Quarter-sawn White Oak, Natural Finish',
    instagramUrl: 'https://instagram.com/p/mock1',
    instagramId: 'mock-1'
  },
  {
    id: 'mock-2',
    title: 'Austin Master Bath Vanity',
    description: 'European frameless bathroom vanity with soft-close drawers and premium European hardware. Custom mirror and lighting integration.',
    imageUrl: '/images/portfolio/austin-bathroom-1.jpg',
    location: 'Austin',
    projectType: 'bathroom',
    cabinetStyle: 'European Frameless',
    isFrameless: true,
    materials: 'Painted Maple, Soft-Close Hardware',
    instagramUrl: 'https://instagram.com/p/mock2',
    instagramId: 'mock-2'
  },
  {
    id: 'mock-3',
    title: 'Spicewood Built-In Entertainment',
    description: 'Custom built-in entertainment center with European frameless construction. Integrated wire management and adjustable shelving.',
    imageUrl: '/images/portfolio/spicewood-builtin-1.jpg',
    location: 'Spicewood',
    projectType: 'built_in',
    cabinetStyle: 'European Frameless',
    isFrameless: true,
    materials: 'Cherry Wood, Natural Stain',
    instagramUrl: 'https://instagram.com/p/mock3',
    instagramId: 'mock-3'
  }
]